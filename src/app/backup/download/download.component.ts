import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
   id_device : any;
   showSpinner = false;

  constructor(private route: ActivatedRoute, private service: ApiserviceService, private _formBuilder: FormBuilder,
    ) {

   }

  ngOnInit(): void {
    // this.route.paramMap.subscribe((params: ParamMap) => {
    //   this.id_device = params.get('id');
    // });
    this.getDownload()
  }

  readData :any;

  getDownload(): void {
    this.service.getDL().subscribe((result) => {
      console.log(result, 'result==>');
      this.readData = result;

    });
  }

  loadData() {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false
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



  openFile(){
    window.open("file:///c:/ProjectCo-op/PYPJ/config-no.exe");
  }

}
