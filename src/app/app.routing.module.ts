import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PageNotFoundComponent} from './';

const routes: Routes = [
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
