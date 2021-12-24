import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdvertisementService } from 'src/app/service/advertisement/advertisement.service';

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

  constructor(private service: AdvertisementService) { }

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

 

}
