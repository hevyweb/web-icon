import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Ng2DeviceDetectorModule, Ng2DeviceService } from 'ng2-device-detector';

import { FilterByPipe } from '../pipes/filterBy.pipe';

import {IconListComponent, AddFormComponent, UncategorizedComponent} from './';
import { IconService, CategoryService, FontService } from '../services/';
import { IconRoutingModule } from './icon.routing.module';
import {An2PaginationComponent} from '../an2-pagination/an2-pagination.component';

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
      UncategorizedComponent,
      FilterByPipe,
      An2PaginationComponent
  ],
  providers: [
      IconService,
      CategoryService,
      FontService,
      Ng2DeviceDetectorModule,
      Ng2DeviceService
  ]
})
export class IconModule {
    constructor(router: Router){}
  }
