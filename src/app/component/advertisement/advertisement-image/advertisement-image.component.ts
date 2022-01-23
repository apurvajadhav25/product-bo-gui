import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AdvertisementService } from 'src/app/service/advertisement/advertisement.service';

@Component({
  selector: 'app-advertisement-image',
  templateUrl: './advertisement-image.component.html',
  styleUrls: ['./advertisement-image.component.css']
})
export class AdvertisementImageComponent implements OnInit {

  myFiles:string [] = [];
  p: any = [];

  constructor(private service: AdvertisementService,
              public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

  ngOnInit(): void {
    this.show();
  }

  deleteImage(name: any) {
    console.log(name)
    this.service.deleteImage(this.config.data.id,name).subscribe((data) => {
    
    });
    this.ngOnInit()
  }

  show(){
    this.service.getAdvertisements().subscribe((data)=>{
      console.log(this.config.data.name)
      for(let i=0;i<data.length;i++){
        if(data[i].name == this.config.data.name){
          this.p=data[i].imagePath.split(",")
          console.log(this.p)
        }
      }
    
    })
  }

  onChange(event: any) {
    //this.file = event.target.files[0];
    for (var i = 0; i < event.target.files.length; i++) { 
      this.myFiles.push(event.target.files[i]);
      console.log(this.myFiles)
  }
  }

  onUpload() {
    this.service.upload(this.myFiles,this.config.data.id).subscribe((r) => {
      this.ngOnInit()
          }
       );

        }

}
