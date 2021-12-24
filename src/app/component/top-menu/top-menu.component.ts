import { Component, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';
import { CategoryComponent } from '../category/category.component';
import { JewelleryComponent } from '../jewellery/jewellery.component';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  items!: MegaMenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
          label: 'Category', routerLink: 'category'
      },
      {
          label: 'Product', routerLink: 'product'
      },
      {
        label: 'Filter1', routerLink: 'filter1'
      },
      {
        label: 'Filter2', routerLink: 'filter2'
      },
      {
        label: 'Filter3', routerLink: 'filter3'
      },
      {
        label: 'Filter4', routerLink: 'filter4'
      },
      {
        label: 'Configuration', routerLink: 'configuration'
      },
      {
          label: 'Payment', routerLink: 'payment'
      },
      {
          label: 'Advertisement', routerLink: 'advertisement'
      }
  ]
  }

}
