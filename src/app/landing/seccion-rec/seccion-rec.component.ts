import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-seccion-rec',
  templateUrl: './seccion-rec.component.html',
  styleUrls: ['./seccion-rec.component.scss']
})
export class SeccionRecComponent {

  title = 'angular-internationalization';
  constructor(public translateService: TranslateService) {
    
  }

 
public selectLanguage(event: any){
   this.translateService.use(event.target.value);
}


}
