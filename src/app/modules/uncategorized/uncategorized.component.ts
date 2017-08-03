import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {IconService, CategoryService} from '../../services/';
import {SearchCommunicatorService} from '../../services/search.communicator.service';

import {Icon, Category} from '../../models/';
import 'rxjs/add/operator/switchMap';
import {Subscription} from'rxjs/Subscription';

@Component({
  templateUrl: './uncategorized.component.html',
  styleUrls: ['./uncategorized.component.css', '../icon-list/icon-list.component.css']
})
export class UncategorizedComponent implements OnInit, OnDestroy {
    icons: Icon[];
    newIcons: Icon[];
    iconCodes: number[];
    activeCategory: number;
    filteredIcons: Icon[];
    iconSubscribtion: Subscription;    
    page: number;
    
    constructor(
        private iconService: IconService,
        private activeRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        this.iconCodes = [];
        this.icons = [];
        this.newIcons = [];
        this.page = 1;
        
        this.activeRoute.params
        .subscribe((params: Params) => {
            this.page = +params['page'] || 1
            if (this.icons.length){
                this.loadIcons(this.page);
            }
        });
        
        this.iconService.getIcons()
        .then(icons => this.parseIcons(icons))
        .catch((err) => console.log(err));
    }
  
    ngOnDestroy(){
        this.iconSubscribtion.unsubscribe();
    }
  
    loadIcons(page: number) {
        let perPage = 100;
        for (var n = 0, i = (this.page - 1)*perPage; n<perPage; i++){
            let icon = new Icon(null, null, '', i, '&#' + i + ';', '', '', '');          

            if (typeof this.iconCodes[i] === 'undefined'){
                this.newIcons.push(icon);
                this.iconCodes[i] = 1;
                n++;
            }
        }
    }
  
    ignoreIcon(icon: Icon) {
        this.iconService.ignoreIcon(icon).then(() => {
            this.icons.push(icon);
            this.iconCodes[icon.code] = 1;
            this.newIcons = this.newIcons.filter(item => item.code !== icon.code);        
        });
    }
    
    parseIcons(icons: Icon[]){
        this.icons = icons;
        this.icons.map(
            (icon: Icon) => this.iconCodes[icon.code] = 1
        );
        this.loadIcons(this.page);
        return this.icons;
    }
}
