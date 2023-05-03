import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './module/login/login.component';
import { HomepageComponent } from './module/homepage/homepage.component';
import { EditComponent } from './module/edit/edit.component';
import { PopupComponent } from './module/popup/popup.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'homepage',component:HomepageComponent},
  {path:'edit',component:EditComponent},
  {path:'popup',component:PopupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
