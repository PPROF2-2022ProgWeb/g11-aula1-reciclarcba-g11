import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {
  @ViewChild("navbar-style") navbarStyle!: ElementRef;
  @ViewChild("menu-button") menuButton!: ElementRef;
  prueba: boolean = false
  title = 'angular-internationalization';
  constructor(public translateService: TranslateService, private router: Router, private render: Renderer2, private elem: ElementRef ) {
       
  }

redirigirLogin(){
  this.router.navigate(['/', 'login'])
}

redirigirRegister(){
  this.router.navigate(['/', 'register'])
}
 
public selectLanguage(event: any){
   this.translateService.use(event.target.value);
}

burgerOn () {
    
  

}


}
