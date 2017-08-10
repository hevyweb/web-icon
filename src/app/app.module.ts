import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { IconModule} from './modules/icon.module';
import { LikePipe } from './pipes/like.pipe';
import { AppRoutingModule, appRouterComponents } from './app.routing.module';

import { AppComponent } from './app.component';
import { IconService } from './services/icon.service';
import { CategoryService } from './services/category.service';
import {SearchCommunicatorService} from './services/search.communicator.service';
import { CategoryListComponent} from './';
import { StaticPagesComponent } from './modules/static-pages/static-pages.component';

@NgModule({
  imports: [
    BrowserModule,    
    IconModule,
    AppRoutingModule,
    HttpModule,
    JsonpModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    CategoryListComponent,
    appRouterComponents,
    LikePipe,
    StaticPagesComponent
  ],
  providers: [IconService, CategoryService, SearchCommunicatorService],
  bootstrap: [AppComponent]
})
export class AppModule { 
    constructor(router: Router){}
}
