import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvertisementComponent } from './component/advertisement/advertisement.component';
import { CategoryComponent } from './component/category/category.component';
import { ConfigurationComponent } from './component/configuration/configuration.component';
import { Filter1Component } from './component/filter1/filter1.component';
import { Filter2Component } from './component/filter2/filter2.component';
import { Filter3Component } from './component/filter3/filter3.component';
import { Filter4Component } from './component/filter4/filter4.component';
import { JewelleryComponent } from './component/jewellery/jewellery.component';
import { LocaleTranslationComponent } from './component/locale-translation/locale-translation.component';
import { PaymentComponent } from './component/payment/payment.component';
import { TopMenuComponent } from './component/top-menu/top-menu.component';
import { LocaleComponent } from './locale/locale.component';

const routes: Routes = [
  {path: '', redirectTo: 'jewellery/category', pathMatch: 'full'},
  {path: 'payment', component: PaymentComponent},
  {path: 'jewellery', component: TopMenuComponent,
    children: [
      {path: 'category', component: CategoryComponent},
      {path: 'product', component: JewelleryComponent},
      {path: 'payment', component: PaymentComponent},
      {path: 'filter1', component: Filter1Component},
      {path: 'filter2', component: Filter2Component},
      {path: 'filter3', component: Filter3Component},
      {path: 'filter4', component: Filter4Component},
      {path: 'configuration', component: ConfigurationComponent},
      {path: 'advertisement', component: AdvertisementComponent},
      {path: 'locale', component: LocaleComponent},
      {path: 'localeTranslation', component: LocaleTranslationComponent},
    ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
