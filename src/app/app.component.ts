import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-internationalization';
  constructor(public translateService: TranslateService) {
    
  }

 
public selectLanguage(event: any){
   this.translateService.use(event.target.value);
}

}
