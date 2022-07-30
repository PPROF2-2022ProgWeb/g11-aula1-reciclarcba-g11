import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent  {

  title = 'angular-internationalization';
  constructor(public translateService: TranslateService) {
    
  }
  
  public selectLanguage(event: any){
    this.translateService.use(event.target.value);
 }
 

}
