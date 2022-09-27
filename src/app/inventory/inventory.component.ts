import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { ngxCsv } from 'ngx-csv/ngx-csv';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  showSpinner = false





  constructor(private invservice : ApiserviceService) { }

  ngOnInit(): void {
    this.getIn()


  }


  readData : any


  getIn() {
    this.invservice.getInventory().subscribe((result) => {
      console.log(result, 'result==>')
      this.readData = result

    })

  }


  // refreshInv(){
  //   this.invservice.refreshIn().subscribe(
  //   );
  // }

  loadData() {
    window.location.reload()
  }

  fileDownload(){
    let options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      title: 'Your title',
      useBom: true,
      noDownload: true,
      headers: ["Hostname", "IP Address", "Up Time", "Serial Number","MAC Address","Model","Version"]
    };

    new ngxCsv(this.readData, 'Inventory');
  }



  onClickDelete() {
    this.invservice.deleteInvAll().subscribe({
      next: (res) => {
        if (res.message == 'delAll') {
          Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              ).then(function () {
                location.reload();
              });
            }
          });
        }
      },
    });
  }


  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
    window.location.reload();
  }

}
