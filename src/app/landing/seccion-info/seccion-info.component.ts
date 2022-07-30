import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-seccion-info',
  templateUrl: './seccion-info.component.html',
  styleUrls: ['./seccion-info.component.scss']
})
export class SeccionInfoComponent {

  title = 'angular-internationalization';
  constructor(public translateService: TranslateService) {
    
  }

 
public selectLanguage(event: any){
   this.translateService.use(event.target.value);
}

}
