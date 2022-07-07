import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SeccionInfoComponent } from './seccion-info/seccion-info.component';
import { SeccionRecComponent } from './seccion-rec/seccion-rec.component';
import { LandingComponent } from './landing-page/landing.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, SeccionInfoComponent, SeccionRecComponent, LandingComponent ],
  imports: [
    CommonModule
  ], 
  exports: [
    HeaderComponent, FooterComponent, SeccionInfoComponent, SeccionRecComponent, LandingComponent
  ]
})
export class LandingModule { }
