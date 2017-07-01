import { Component, OnInit } from '@angular/core';
import {IconService, CategoryService} from '../../services/';

import {Icon, Category} from '../../models/';


@Component({
  templateUrl: './icon-list.component.html',
  styleUrls: ['./icon-list.component.css']
})
export class IconListComponent implements OnInit {

    icons: Icon[];
    categories: Category[];
    newIcons: any[];
    iconCodes: any[];
    
  constructor(
      private categoryService: CategoryService,
      private iconService: IconService
  ) { }

  ngOnInit() {
      this.iconCodes = [];
      this.iconService.getIcons().then(
        (icons) => {
            this.icons = icons;
            this.icons.map(icon => this.iconCodes[icon.code] = 1)
        })
        .catch((err) => console.log(err));
      this.categories = this.categoryService.getCategories();
      this.newIcons = [];
  }
  
  loadIcons() {
      for (var n = 0, i = 0; n<100; i++){
          let code = '&#' + i + ';';          
          
          if (typeof this.iconCodes[i] === 'undefined'){
              this.newIcons.push(code);
              this.iconCodes[i] = 1;
              n++;
          }
      }
  }
  
  convertToInteger(icon: string){
      return icon.replace('&#', '').replace(';', '');
  }
}
