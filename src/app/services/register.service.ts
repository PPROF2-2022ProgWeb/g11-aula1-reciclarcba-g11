import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { registerI } from '../landing/interface/register.interface';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url: string = 'http://localhost:8080/apirest/usuarios/'

  constructor(private http: HttpClient) { }

  registrarUsuario(register: registerI){
    this.http.post(this.url, register)
  }

  listarUsuario(){
    
  }

}
