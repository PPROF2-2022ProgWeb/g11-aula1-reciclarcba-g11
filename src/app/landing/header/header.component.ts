import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {

  title = 'angular-internationalization';
  constructor(public translateService: TranslateService) {
    
  }

 
public selectLanguage(event: any){
   this.translateService.use(event.target.value);
}

}
