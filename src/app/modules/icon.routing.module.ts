import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IconListComponent, AddFormComponent, UncategorizedComponent } from './';
import {StaticPagesComponent} from './static-pages/static-pages.component';

const routes: Routes = [
  {
    path: '',
    component: IconListComponent,
    pathMatch: 'full',
    data: { title: 'Web icons' }
  },
  {
    path: 'uncategorized/:page',
    component: UncategorizedComponent,
    data: { title: 'Uncategorized icons' }  
  },
  {
    path: 'icon-add/:code',
    component: AddFormComponent,
    data: { title: 'Add new icon to the library.' }
  },
  {
    path: 'icon-edit/:code',
    component: AddFormComponent,
    data: { title: 'Edit icon.' }
  },
  {
    path: 'about',
    component: StaticPagesComponent,
    data: { title: 'About the project' }
  }
];

export let appRouterComponents = [IconListComponent, AddFormComponent];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class IconRoutingModule { }
