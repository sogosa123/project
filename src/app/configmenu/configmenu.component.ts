import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import Swal, { SweetAlertInput } from 'sweetalert2';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-configmenu',
  templateUrl: './configmenu.component.html',
  styleUrls: ['./configmenu.component.scss'],
})
export class ConfigmenuComponent implements OnInit {
  configForm: FormGroup<{}> | undefined;
  showPassword: boolean = false;

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  fourthFormGroup = this._formBuilder.group({
    fourthCtrl: ['', Validators.required],
  });


  constructor(private configservice: ApiserviceService, private formconfig: FormBuilder, private _formBuilder: FormBuilder) {

  }

  configu = this.formconfig.group({
    ip: [''],
    user: [''],
    password: [''],
    spass: ['']
  });

  vlanfrm = this._formBuilder.group({
    ip: [''],
    vlan: [''],
    interface: [''],
    mode: [''],
    ipp: [''],
    intvlan: [''],

  });

  crvlanfrm = this._formBuilder.group({
    ipp: [''],
    intvlan: [''],


  });



  ngOnInit(): void {

    this.getConfig()
    this.getShowIPint()
    this.getJoinShow(this.getJoinShow)

  }


  readData: any;

  getConfig() {
    this.configservice.getConfigTable().subscribe((result) => {
      console.log(result, 'result==>')
      this.readData = result
    })
  }


  postConfig(){
    this.configservice.postConfigTable(this.configu.value).subscribe({
      next: (res) => {
        if (res.message == 'configsuccessfully') {
          Swal.fire('Good job!', 'You clicked the button!', 'success').then(
            function () {
              location.reload();
            }
          )
        }
      },
    });
  }

  onClickDelete(id: any){
    this.configservice.deleteConfig(id).subscribe({
      next:(res)=>{
        if (res.message == "DELETEDIP"){

          Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              ).then(function(){
                location.reload();
                })
            }
          })
        }
       }
    })
  }

  readshow: any

  getShowIPint() {

    this.configservice.getShowIP().subscribe((result) => {
      console.log(result, 'result==>')
      this.readshow = result
    })
  }

  updateTrue(id:any){

    this.configservice.updateConfig(id).subscribe({
      next: (res) => {
        if (res.message == 'OKK') {
          Swal.fire('Good job!', 'You clicked the button!', 'success').then(
            function () {
              location.reload();
            }
          )
        }
      }
    })
  }

  deleteShowip(id: any){
    this.configservice.deleteShow(id).subscribe({
      next:(res)=>{
        if (res.message == "DELETEDIPs"){

          Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              ).then(function(){
                location.reload();
                })
            }
          })
        }
       }
    })
    }

  readshow1 : any

  getJoinShow(id : any) {

      this.configservice.getJoin(id).subscribe((result) => {
        console.log(result, 'result==>')
        this.readshow1 = result
      })
    }

  displayStyle = "none";

  displayStyle1 = "none";



  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
    window.location.reload();
  }

  openPopup1() {
    this.displayStyle1 = "block";
  }
  closePopup1() {
    this.displayStyle1 = "none";
    window.location.reload();
  }




  vLan(){
    this.configservice.vlan(this.vlanfrm.value).subscribe({
      next: (res) => {
        if (res.message == 'vlan') {
          Swal.fire('Good job!', 'You clicked the button!', 'success').then(
            function () {
              location.reload();
            }
          )
        }
      },
    });
  }

  createvLan(){
    this.configservice.createvlan(this.vlanfrm.value).subscribe({
      next: (res) => {
        if (res.message == 'createvlan') {
          Swal.fire('Good job!', 'You clicked the button!', 'success').then(
            function () {
              location.reload();
            }
          )
        }
      },
    });
  }



}
