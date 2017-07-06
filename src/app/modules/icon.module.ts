import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Ng2DeviceDetectorModule, Ng2DeviceService } from 'ng2-device-detector';

import { FilterByPipe } from '../pipes/filterBy.pipe';
import { LikePipe } from '../pipes/like.pipe';

import { IconListComponent} from './';
import { IconService, CategoryService, FontService } from '../services/';
import { AddFormComponent } from './add-form/add-form.component';
import { IconRoutingModule } from './icon.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IconRoutingModule
  ],
  declarations: [
      IconListComponent,
      AddFormComponent,
      FilterByPipe,
      LikePipe
  ],
  providers: [
      IconService,
      CategoryService,
      FontService,
      Ng2DeviceDetectorModule,
      Ng2DeviceService
  ]
})
export class IconModule { }
