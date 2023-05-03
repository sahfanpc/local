import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatChipsModule} from '@angular/material/chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { from } from 'rxjs';
import { MatTabsModule } from '@angular/material/tabs';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PopupComponent } from './popup/popup.component';


@NgModule({
  declarations: [
LoginComponent,
HomepageComponent,
PopupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule,
    BrowserModule,
  // AppRoutingModule,
  MatButtonToggleModule,
  MatPaginatorModule,
  MatTabsModule,
  MatSelectModule,
  MatFormFieldModule,
  MatDialogModule,
  MatIconModule,
  MatButtonModule,
  FormsModule,
  ReactiveFormsModule,
  MatInputModule,
  BrowserAnimationsModule,
  MatChipsModule,
  MatGridListModule,
  MatSlideToggleModule,
  RouterLink,
  HttpClientModule,
  RouterLink
   
  ]
})
export class ModuleModule { }
