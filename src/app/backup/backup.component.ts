import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import Swal, { SweetAlertInput } from 'sweetalert2';
import { ApiserviceService } from '../apiservice.service';

import { Router } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';

@Component({
  selector: 'app-backup',
  templateUrl: './backup.component.html',
  styleUrls: ['./backup.component.scss'],
})
export class BackupComponent implements OnInit {
  multipleHttp!: {};
  backupForm!: FormGroup<{}>;
  showPassword: boolean = false;


  constructor(private service: ApiserviceService, private formA: FormBuilder, private router: Router) {}

  frm = this.formA.group({
    ip: [''],
    user: [''],
    password: [''],
    spassword: [''],
  });





  ngOnInit(): void {

    this.getDownload()


  }




  readData: any;

  getAll() {
    this.service.getAllData().subscribe((result) => {
      console.log(result);

      //console.log(result, 'result==>');
      this.readData = result;
    });
  }

  insertBackup() {
    this.service.backupData(this.frm.value).subscribe({
      next: (res) => {
        if (res.message == 'successfully') {
          Swal.fire('Good job!', 'You clicked the button!', 'success').then(
            function () {
              location.reload();
            }
          );
        }
      },
    });
  }

  onClickDelete(id: any) {
    this.service.deleteBackup(id).subscribe({
      next: (res) => {
        if (res.message == 'DELETED') {
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

  updateTrue(id: any) {
    this.service.updateBackupT(id).subscribe({
      next: (res) => {
        if (res.message == 'OK') {
          Swal.fire({
            title: "Checking...",
            text: "Please wait",
            imageUrl: "https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif",
            showConfirmButton: false,
            allowOutsideClick: false,
            timer: 45000
            }).then(
            function () {
              location.reload();
            }
          );
        }
      },
    });
  }

  backupAll(){
    this.service.backUpall().subscribe({
      next: (res) => {
        if (res.message == 'all') {
          Swal.fire({
            title: "Checking...",
            text: "Please wait",
            imageUrl: "",
            showConfirmButton: false,
            allowOutsideClick: false,
            timer: 35000
            }).then(
            function () {
              location.reload();
            }
          );
        }
      },
    })
  }

  readData2: any;

  getDownload()  {
    this.service.getGet().subscribe((result) => {
      console.log(result, 'result==>');
      this.readData2 = result;


    });
  }

  readData3: any;

  getInvento(){
    this.service.getInventory().subscribe((result) => {
      console.log(result, 'result==>');
      this.readData3 = result;

    });
  }

  showSpinner = false;

  loadData() {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false
    }, 5000)
  }

  showHidePassword() {
    this.showPassword = !this.showHidePassword;
  }

  loading = false;

  save(): void {
    this.loading = true;
    setTimeout(() => {
      this.loading = false
    }, 5000)
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
