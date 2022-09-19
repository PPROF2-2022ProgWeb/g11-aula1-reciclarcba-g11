import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';
import { registerI } from '../interface/register.interface';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  contactForm!: FormGroup;
   
  constructor(private readonly fb: FormBuilder, private registerService: RegisterService) { }

  ngOnInit(): void {
    this.contactForm = this.initForm();
    
  }



  onSubmit(form: registerI): void {
    /* console.log('Form ->', this.contactForm.value); */
    /* this.registerService.registrarUsuario(form) */
    console.log('La cuenta se registro exitosamente')
    
  }

  initForm(): FormGroup {
    return this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/')]],
      fecha_nac: ['', [Validators.required]],
      contra: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      ciudad: ['', [Validators.required]],
      provincia: ['', [Validators.required]],
      pais: ['', [Validators.required]],
    })
  }

 
}
