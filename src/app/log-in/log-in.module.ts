import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from '../landing/form/form.component';
import { HeaderComponent } from '../landing/header/header.component';



@NgModule({
  declarations: [
    FormComponent,
    HeaderComponent
    
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class LogInModule { }
