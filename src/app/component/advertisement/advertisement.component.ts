import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AdvertisementService } from 'src/app/service/advertisement/advertisement.service';
import { AdvertisementImageComponent } from './advertisement-image/advertisement-image.component';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.css']
})
export class AdvertisementComponent implements OnInit {

  editEnabled = false;
  jewelleryForm!: FormGroup;
  jewelleries: any;
  isResult: boolean = true;
  submitted = false;
  display: boolean = false;
  myFiles:string [] = [];
  id: number = 0

  constructor(private service: AdvertisementService,
              public dialogService: DialogService
              ) { }

  ngOnInit(): void {
    this.jewelleryForm = new FormGroup({
      name: new FormControl(''),
      imagePath: new FormControl(''),
      isEnable: new FormControl(''),
    })

    this.getAdvertisements();
  }

  getAdvertisements() {
    this.service.getAdvertisements()
      .subscribe((data) => {
        console.log(JSON.stringify(data));
        this.jewelleries = data;
        if(this.jewelleries.length===0) {
          this.isResult=false;
        } else {
          this.isResult=true;
        }
    }); 
    this.jewelleryForm.reset();
  }

  onRowEditInit(customer: any, index: number) {
    this.id = customer.id
    console.log(index);
    this.editEnabled = true;
    console.log('Row edit initialized');
  }

  onRowEditSave(customer: any, index: number) {
    console.log(index);
    this.editEnabled = false;
    customer.imagePath.split(",")
    this.service.editAdvertisement(customer).subscribe((data) => {
      this.getAdvertisements();
    });
    console.log('Row edit saved');
  }

  onRowEditCancel(customer: any, index: number) {
    console.log(index);
    this.editEnabled = false;
    console.log('Row edit cancelled');
  }

  deleteFilter(customer: any, index: number) {
    console.log(index);
    this.service.deleteAdvertisement(customer).subscribe((data) => {
      this.ngOnInit();
     // this.getJewelleries();
    });
  }

  show() {
    this.display = true;
  }

  onSubmit() {
    console.log("welcome")
    console.log(this.jewelleryForm?.value);
    this.submitted = true;
    if (this.jewelleryForm?.invalid) {
      return;
    }
    this.service.createAdvertisement(this.jewelleryForm?.value).subscribe(data=>{
      this.ngOnInit();
      console.log(data);
    });
    this.getAdvertisements();
    this.display=false;
  }

  onChange(event: any) {
    //this.file = event.target.files[0];
    for (var i = 0; i < event.target.files.length; i++) { 
      this.myFiles.push(event.target.files[i]);
      console.log(this.myFiles)
  }
  }

  onUpload() {
    console.log(this.id)
    this.service.upload(this.myFiles,this.id).subscribe((r) => {
      this.ngOnInit()
          }
       );

        } 
  showImage(id: any,name: any) {
    console.log(id)
    const ref = this.dialogService.open(AdvertisementImageComponent, {
      header: 'Add Images',
      width: '350px',
      data:{
            "id": id,
            "name": name
            }
          });
        }      

 

}
