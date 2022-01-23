import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LocaleTranslationService } from 'src/app/service/localeTranslation/locale-translation.service';

@Component({
  selector: 'app-locale-translation',
  templateUrl: './locale-translation.component.html',
  styleUrls: ['./locale-translation.component.css']
})
export class LocaleTranslationComponent implements OnInit {

  editEnabled = false;
  jewelleryForm!: FormGroup;
  jewelleries: any;
  isResult: boolean = true;
  submitted = false;
  display: boolean = false;

  constructor(private service: LocaleTranslationService) { }

  ngOnInit(): void {
    this.jewelleryForm = new FormGroup({
      localeCode: new FormControl(''),
      key: new FormControl(''),
      translation: new FormControl(''),
    })

    this.getLocaleTranslation();
  }

  getLocaleTranslation() {
    this.service.getLocaleTranslation().subscribe((data) => {
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
    this.service.editLocaleTranslation(customer).subscribe((data) => {
    this.getLocaleTranslation();
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
    this.service.deleteLocaleTranslation(customer).subscribe((data) => {

    });
    this.ngOnInit();
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
    this.service.createLocaleTranslation(this.jewelleryForm?.value).subscribe(data=>{
      this.ngOnInit();
      console.log(data);
    });
    this.getLocaleTranslation();
    this.display=false;
  }

}
