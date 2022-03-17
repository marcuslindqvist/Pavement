import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, AppRoutingModule, MatSlideToggleModule, MatButtonModule],
  exports: [HeaderComponent],
})
export class CoreModule { }
