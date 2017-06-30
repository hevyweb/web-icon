import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

import {IconModule} from './modules/icon.module';

import { AppRoutingModule, appRouterComponents } from './app.routing.module';

import { AppComponent } from './app.component';
import { IconService } from './services/icon.service';
import { CategoryService } from './services/category.service';
import { CategoryListComponent} from './';

@NgModule({
  imports: [
    BrowserModule,    
    IconModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    CategoryListComponent,
    appRouterComponents        
  ],  
  providers: [IconService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { 
    constructor(router: Router){}
}
