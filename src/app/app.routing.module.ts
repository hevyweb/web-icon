import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PageNotFoundComponent} from './';
import { IconListComponent } from './';
const routes: Routes = [
  {
    path: 'category/:categoryId',
    component: IconListComponent,
    pathMatch: 'full',
    data: { title: 'Category' }
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    data: { title: 'Page Not Found' }
  }
];

export let appRouterComponents = [PageNotFoundComponent];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }