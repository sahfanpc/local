import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLinkActive } from '@angular/router';
import { ModuleModule } from './module/module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditComponent } from './module/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModuleModule,
    BrowserAnimationsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
