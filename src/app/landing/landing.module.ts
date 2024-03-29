import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SeccionInfoComponent } from './seccion-info/seccion-info.component';
import { SeccionRecComponent } from './seccion-rec/seccion-rec.component';
import { LandingComponent } from './landing-page/landing.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { FormComponent } from './form/form.component';
import { RegistroComponent } from './registro/registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [HeaderComponent, FooterComponent, SeccionInfoComponent, SeccionRecComponent, LandingComponent, FormComponent, RegistroComponent ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en-US',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ], 
  exports: [
    HeaderComponent, FooterComponent, SeccionInfoComponent, SeccionRecComponent, LandingComponent, FormComponent
  ]
})
export class LandingModule { }
