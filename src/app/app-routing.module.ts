import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing-page/landing.component';
import { FormComponent } from './landing/form/form.component';
import { RegistroComponent } from './landing/registro/registro.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    component: LandingComponent
  },
  {
    path: 'login',
    component: FormComponent
  },
  {
    path: 'register',
    component: RegistroComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
