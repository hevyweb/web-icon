import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { IconListComponent} from './';
import { IconService, CategoryService } from '../services/';
import { AddFormComponent } from './add-form/add-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
      IconListComponent,
      AddFormComponent
  ],
  providers: [
      IconService,
      CategoryService
  ]
})
export class IconModule { }
