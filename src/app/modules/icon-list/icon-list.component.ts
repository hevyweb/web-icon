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
    newIcons: Icon[];
    iconCodes: number[];
    iconSearch: string[];
    
  constructor(
      private categoryService: CategoryService,
      private iconService: IconService
  ) { }

  ngOnInit() {this.iconSearch = [];
      this.iconCodes = [];
      this.iconService.getIcons().then(
        (icons) => {
            this.icons = icons;
            this.icons.map(icon => this.iconCodes[icon.code] = 1);
        })
        .catch((err) => console.log(err));
      this.categories = this.categoryService.getCategories();
      this.newIcons = [];
  }
  
  loadIcons() {
      for (var n = 0, i = 0; n<100; i++){
          let icon = new Icon(null, null, '', i, '&#' + i + ';', '', '', '');          
          
          if (typeof this.iconCodes[i] === 'undefined'){
              this.newIcons.push(icon);
              this.iconCodes[i] = 1;
              n++;
          }
      }
  }
  
  removeIcon(icon: Icon) {
    this.iconService.removeIcon(icon).then(() => {
        this.icons = this.icons.filter(item => item.code !== icon.code);
    });
  }
  
  ignoreIcon(icon: Icon) {
      this.iconService.ignoreIcon(icon).then(() => {
        this.icons.push(icon);
        this.iconCodes[icon.code] = 1;
        this.newIcons = this.newIcons.filter(item => item.code !== icon.code);        
    });
  }
}
