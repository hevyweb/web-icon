import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {IconService, CategoryService} from '../../services/';

import {Icon, Category} from '../../models/';
import 'rxjs/add/operator/switchMap';

@Component({
  templateUrl: './icon-list.component.html',
  styleUrls: ['./icon-list.component.css']
})
export class IconListComponent implements OnInit {
    @Input() search: any;
    
    icons: Icon[];
    categories: Category[];
    newIcons: Icon[];
    iconCodes: number[];
    iconSearch: string[];
    activeCategory: number;
    
  constructor(
      private categoryService: CategoryService,
      private iconService: IconService,
      private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
      this.activeCategory = null;
      this.activeRoute.params
        .subscribe((params: Params) => this.activeCategory = params['categoryId']);
      this.iconSearch = [];
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
