import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { JewelleryService } from 'src/app/service/jewellery/jewellery.service';
import { Product } from '../models/product';
import {RadioButtonModule} from 'primeng/radiobutton';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  myFiles:string [] = [];
  images: any;
  id!: number;
  selectedValues: string[] = [];
  i: any;
  p: any;
  u: any;

  constructor(private service: JewelleryService,
    public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
      console.log(config.data.id)
     }

  ngOnInit(): void {
    this.getImages()
    console.log("welcome")

  }

  getImages(){
    this.service.getImages(this.config.data.id).subscribe(images1=>{
      this.images= images1;
    })
    
  }

  onChange(event: any) {
    //this.file = event.target.files[0];
    for (var i = 0; i < event.target.files.length; i++) { 
      this.myFiles.push(event.target.files[i]);
  }
  }

  onUpload() {
    this.service.upload(this.myFiles,this.config.data.id).subscribe((r) => {
        this.ngOnInit()
            }
         );
        // this.getImages()
        }  
   
  deleteImage(id: number) {
    this.service.deleteImage(id).subscribe((data) => {
    
    });
    this.ngOnInit()
  }

  onCheckboxChange(id: number){
    this.service.getImageById(id).subscribe((data)=>{
      this.i= data;
    });
    this.service.getJwelleryById(this.config.data.id).subscribe((data: any)=>{
      this.p= data;
      this.p.imagePath= this.i.path
      console.log(this.p);
      this.service.editJewellery(this.p).subscribe((u)=>{
        this.u=u
      })
    });
   
     
    }
  }
    

  