import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {IconListComponent, PageNotFoundComponent} from './';

const routes: Routes = [
  {
    path: '',
    component: IconListComponent,
    pathMatch: 'full',
    data: { title: 'Web icons' }
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    data: { title: 'Page Not Found' }
  }
];

export let appRouterComponents = [IconListComponent, PageNotFoundComponent];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
