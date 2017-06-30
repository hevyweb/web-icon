import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FilterByPipe } from '../pipes/filterBy.pipe';


import { IconListComponent} from './';
import { IconService, CategoryService } from '../services/';
import { AddFormComponent } from './add-form/add-form.component';
import { IconRoutingModule } from './icon.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IconRoutingModule
  ],
  declarations: [
      IconListComponent,
      AddFormComponent,
      FilterByPipe
  ],
  providers: [
      IconService,
      CategoryService
  ]
})
export class IconModule { }
