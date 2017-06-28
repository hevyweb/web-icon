import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../services/category.service';
import {IconService} from '../services/icon.service';

import {Icon} from '../models/icon.model';
import {Category} from '../models/category.model';


@Component({
  templateUrl: './icon-list.component.html',
  styleUrls: ['./icon-list.component.css']
})
export class IconListComponent implements OnInit {

    icons: Icon[];
    categories: Category[];
    newIcons: any[];
    
  constructor(
      private categoryService: CategoryService,
      private iconService: IconService
  ) { }

  ngOnInit() {
      this.iconService.getIcons().then(icons => this.icons = icons)
        .catch((err) => console.log(err));
      this.categories = this.categoryService.getCategories();
      this.newIcons = [];
  }
  
  loadIcons() {
      for (let n = 0; n<100; n++){
          let code = '&#' + n + ';';
          if (this.iconService.getIconByCode(code) == false){
              this.newIcons.push(code);
          }
      }
  }
}
