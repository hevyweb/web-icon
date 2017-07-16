import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {IconService, CategoryService} from '../../services/';
import {SearchCommunicatorService} from '../../services/search.communicator.service';

import {Icon, Category} from '../../models/';
import 'rxjs/add/operator/switchMap';
import {Subscription} from'rxjs/Subscription';

@Component({
  templateUrl: './icon-list.component.html',
  styleUrls: ['./icon-list.component.css']
})
export class IconListComponent implements OnInit, OnDestroy {
    icons: Icon[];
    categories: Category[];
    newIcons: Icon[];
    iconCodes: number[];
    searchPhrases: string[];
    activeCategory: number;
    filteredIcons: Icon[];
    subscription: Subscription;
    
    constructor(
        private categoryService: CategoryService,
        private iconService: IconService,
        private activeRoute: ActivatedRoute,
        private searchService: SearchCommunicatorService
    ) { }

    ngOnInit() {
        this.activeCategory = null;
        this.activeRoute.params
          .subscribe((params: Params) => this.activeCategory = params['categoryId']);
        this.searchPhrases = [];
        this.iconCodes = [];
        this.icons = [];

        this.iconService.getIcons().then(
          (icons) => {
              this.icons = icons;
              this.icons.map(icon => this.iconCodes[icon.code] = 1);
          })
          .catch((err) => console.log(err));

        this.categories = [];
        this.categoryService.getCategories().then(
          (categories) => {
              this.categories = categories;
          })
          .catch((err) => console.log(err));

        this.newIcons = [];

        this.subscription = this.searchService.searchPhrases$.subscribe(
          (searchPhrases: string[]) => this.searchPhrases = searchPhrases
        );
    }
  
    ngOnDestroy(){
        this.subscription.unsubscribe();
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
  
    filterIcons(icons: Icon[], categoryId: number){
        this.filteredIcons = icons.filter(icon => icon.category == categoryId && (this.searchPhrases.length == 0 || this.like(icon.description)));
        return this.filteredIcons.length;
    }
  
    like(description: string): boolean{
        description = description.toLowerCase();
        for (let phrase of this.searchPhrases) {
            if (description.indexOf(phrase.toLowerCase()) < 0) {
                return false
            }
        }
        return true;
    }
}
