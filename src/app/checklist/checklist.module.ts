import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ChecklistComponent } from './checklist.component';
import { ChecklistItemComponent } from './checklist-item/checklist-item.component';
import { MatChipsModule } from '@angular/material/chips';
import { ChecklistDetailedViewComponent } from './checklist-detailed-view/checklist-detailed-view.component';
import { ChecklistLeftListComponent } from './checklist-left-list/checklist-left-list.component';
import { MatListModule } from '@angular/material/list';

import { AppRoutingModule } from '../app-routing.module';
@NgModule({
  declarations: [ChecklistComponent, ChecklistItemComponent, ChecklistDetailedViewComponent, ChecklistLeftListComponent],
  imports: [
    CommonModule, MatCardModule, MatChipsModule, MatListModule, AppRoutingModule
  ],
  exports: [ChecklistComponent, ChecklistItemComponent]
})
export class ChecklistModule { }
