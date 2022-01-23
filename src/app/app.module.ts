import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {TabMenuModule} from 'primeng/tabmenu';
import {CalendarModule} from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {PaginatorModule} from 'primeng/paginator';
import {FileUploadModule} from 'primeng/fileupload';
import { MultiSelectModule } from 'primeng/multiselect';
import {InputSwitchModule} from 'primeng/inputswitch';
import {CheckboxModule} from 'primeng/checkbox';
import { MegaMenuModule } from 'primeng/megamenu';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { MenuModule } from 'primeng/menu';
import { CategoryComponent } from './component/category/category.component';
import { CategoryService } from './service/category/category.service';
import {DialogModule} from 'primeng/dialog';
import { JewelleryComponent } from './component/jewellery/jewellery.component';
import { TopMenuComponent } from './component/top-menu/top-menu.component';
import { PaymentComponent } from './component/payment/payment.component';
import { AddPaymentComponent } from './component/add-payment/add-payment.component';
import { ImageComponent } from './component/image/image.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { Filter1Component } from './component/filter1/filter1.component';
import { Filter2Component } from './component/filter2/filter2.component';
import { Filter3Component } from './component/filter3/filter3.component';
import { Filter4Component } from './component/filter4/filter4.component';
import { ConfigurationComponent } from './component/configuration/configuration.component';
import { AdvertisementComponent } from './component/advertisement/advertisement.component';
import { AdvertisementImageComponent } from './component/advertisement/advertisement-image/advertisement-image.component';
import { LocaleComponent } from './locale/locale.component';
import { LocaleTranslationComponent } from './component/locale-translation/locale-translation.component';



@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    JewelleryComponent,
    TopMenuComponent,
    PaymentComponent,
    AddPaymentComponent,
    ImageComponent,
    Filter1Component,
    Filter2Component,
    Filter3Component,
    Filter4Component,
    ConfigurationComponent,
    AdvertisementComponent,
    AdvertisementImageComponent,
    LocaleComponent,
    LocaleTranslationComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    TabMenuModule,
    CalendarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TableModule,
    DropdownModule,
    PaginatorModule,
    FileUploadModule,
    MultiSelectModule,
    InputSwitchModule,
    CheckboxModule,
    MegaMenuModule,
    DynamicDialogModule,
    MenuModule,
    DialogModule,
    RadioButtonModule
    
  ],
  providers: [
    CategoryService,
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
