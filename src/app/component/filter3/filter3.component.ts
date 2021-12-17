import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Filter3Service } from 'src/app/service/filter3/filter3.service';

@Component({
  selector: 'app-filter3',
  templateUrl: './filter3.component.html',
  styleUrls: ['./filter3.component.css']
})
export class Filter3Component implements OnInit {
  editEnabled = false;
  jewelleryForm!: FormGroup;
  jewelleries: any;
  isResult: boolean = true;
  submitted = false;
  display: boolean = false;

  constructor(private service: Filter3Service) { }

  ngOnInit(): void {
    this.jewelleryForm = new FormGroup({
      name: new FormControl(''),
      isEnable: new FormControl(''),
    })

    this.getFilters();
  }

  getFilters() {
    this.service.getFilters()
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
    this.service.editFilter(customer).subscribe((data) => {
      this.getFilters();
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
    this.service.deleteFilter(customer).subscribe((data) => {
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
    this.service.createFilter(this.jewelleryForm?.value).subscribe(data=>{
      this.ngOnInit();
      console.log(data);
    });
    this.getFilters();
    this.display=false;
  }


}
