import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  title = 'angular-internationalization';
  constructor(public translateService: TranslateService) {
    
  }

 
public selectLanguage(event: any){
   this.translateService.use(event.target.value);
}

}
