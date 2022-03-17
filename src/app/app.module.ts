import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChecklistItemComponent } from './checklist/checklist-item/checklist-item.component';
@NgModule({
  declarations: [AppComponent, HomeComponent, ChecklistComponent, ChecklistItemComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
