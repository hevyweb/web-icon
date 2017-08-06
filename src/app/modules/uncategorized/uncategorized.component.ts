import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IconService } from '../../services/';

import { Icon } from '../../models/';
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
    page: number;
    subscription: Subscription;
    
    constructor(
        private iconService: IconService,
        private activeRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        this.iconCodes = [];
        this.icons = [];
        this.newIcons = [];
        this.page = 1;
        
        this.subscription = this.activeRoute.params
        .subscribe((params: Params) => {
            this.page = +params['page'] || 1
            if (this.icons.length){
                this.loadIcons();
            }
        });
        
        this.iconService.getIcons()
        .then(icons => this.parseIcons(icons))
        .catch((err) => console.log(err));
    }
    
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
  
    loadIcons() {
        let perPage = 100,
            min = (this.page - 1) * perPage,
            max = this.page * perPage;
        this.newIcons = [];
        for (var n = 0, i = 0; n<max; i++){
            let icon = new Icon(null, null, '', i, '&#' + i + ';', '', '', '');          

            if (typeof this.iconCodes[i] === 'undefined'){
                if(n >= min && n < max){
                    this.newIcons.push(icon);
                }
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
        this.loadIcons();
        return this.icons;
    }
}
