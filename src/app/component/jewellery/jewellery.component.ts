import { Component, OnInit } from '@angular/core';
import {trigger,state,style,transition,animate} from '@angular/animations';
import * as data from 'src/app/category.json';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JewelleryService } from 'src/app/service/jewellery/jewellery.service';
import { ImageComponent } from '../image/image.component';
import { Product } from '../models/product';
import { Filter1Service } from 'src/app/service/filter1.service'
import { Filter2Service } from 'src/app/service/filter2/filter2.service';

@Component({
  selector: 'app-jewellery',
  templateUrl: './jewellery.component.html',
  styleUrls: ['./jewellery.component.css'],
  animations: [
    trigger('animation', [
        state('visible', style({
            transform: 'translateX(0)',
            opacity: 1
        })),
        transition('void => *', [
            style({transform: 'translateX(50%)', opacity: 0}),
            animate('300ms ease-out') 
        ]),
        transition('* => void', [
            animate(('250ms ease-in'), style({
                height: 0,
                opacity: 0,
                transform: 'translateX(50%)'
            }))
        ])
    ])
]
})
export class JewelleryComponent  implements OnInit {
  
  editEnabled = false;
  jewelleryForm!: FormGroup;
  jewelleries: any;
  isResult: boolean = true;
  selectedValues: string[] = [];
  customers: any = (data as any).default;
  submitted = false;
  display: boolean = false;
  filter1: any
  filter2: any
  filter3: any
  
  constructor(public dialogService: DialogService,
              private service: JewelleryService,
              private filter1Service: Filter1Service,
              private filter2Service: Filter2Service,
              private filter3Service: Filter2Service
                ) { 
                  this.filter1Service.getFilters().subscribe((data)=>{
                    this.filter1= data
                  })
                  this.filter2Service.getFilters().subscribe((data)=>{
                    this.filter2= data
                  })
                  this.filter3Service.getFilters().subscribe((data)=>{
                    this.filter3= data
                  })
                
                
                }

  ngOnInit() {
    
    this.jewelleryForm = new FormGroup({
      name: new FormControl('', Validators.required),
      //name: new FormControl(''),
      price: new FormControl('', Validators.required),
      description: new FormControl(''),
      discount: new FormControl(''),
      gender: new FormControl('', Validators.required),
      rating: new FormControl(''),
      filter1: new FormControl(''),
      filter2: new FormControl(''),
      filter3: new FormControl(''),
      filter4: new FormControl(''),
      isEnable: new FormControl('')
    
      
    })
    this.getJewelleries();
  
  }

  getJewelleries() {
    this.service.getJewelleries()
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
    this.editEnabled = false;
    customer.filter1= customer.filter1.name
    customer.filter2= customer.filter2.name
    customer.filter3= customer.filter3.name
    console.log(customer)
    this.service.editJewellery(customer).subscribe((data) => {
      this.getJewelleries();
    });
    console.log('Row edit saved');
  }

  onRowEditCancel(customer: any, index: number) {
    console.log(index);
    this.editEnabled = false;
    console.log('Row edit cancelled');
  }

  deleteJewellery(customer: any, index: number) {
    console.log(index);
    this.service.deleteJewellery(customer).subscribe((data) => {
      this.ngOnInit();
     // this.getJewelleries();
    });
  }

  show() {
    this.display = true;
  }

  onSubmit() {
    console.log(this.jewelleryForm?.value);
    this.submitted = true;
    if (this.jewelleryForm?.invalid) {
      return;
    }
    this.service.createJewellery(this.jewelleryForm?.value).subscribe(data=>{
      this.ngOnInit();
      console.log(data);
    });
    this.getJewelleries();
    this.display=false;
  }

  get name() {
    return this.jewelleryForm?.get('name');
  }

  get price() {
    return this.jewelleryForm?.get('price');
  }

  get gender() {
    return this.jewelleryForm?.get('gender');
  }

  get filterHeading() {
    return this.jewelleryForm?.get('filterHeading');
  }

  showImage(id: any) {
    console.log(id)
    const ref = this.dialogService.open(ImageComponent, {
        header: 'Add Images',
        width: '350px',
        data:{
          "id": id
        }
    });
  }

  

 
  
}
