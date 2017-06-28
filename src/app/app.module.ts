import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

import { AppRoutingModule, appRouterComponents } from './app.routing.module';

import { AppComponent } from './app.component';
import { IconService } from './services/icon.service';
import { CategoryService } from './services/category.service';
import { CategoryListComponent} from './';
import { FilterByPipe } from './pipes/filterBy.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    appRouterComponents,
    FilterByPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [IconService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { 
    constructor(router: Router){}
}
