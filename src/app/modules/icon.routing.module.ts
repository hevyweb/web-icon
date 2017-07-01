import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IconListComponent, AddFormComponent } from './';


const routes: Routes = [
  {
    path: '',
    component: IconListComponent,
    pathMatch: 'full',
    data: { title: 'Web icons' }
  },
  {
    path: 'icon-add/:id',
    component: AddFormComponent,
    data: { title: 'Add new icon to the icon.' }
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
