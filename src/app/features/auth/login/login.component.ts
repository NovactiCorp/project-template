import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private fb = inject( FormBuilder );

  constructor() {}

  public myForm: FormGroup = this.fb.group({
    email:    ['rodrigo.solis@novacti.com.mx', [ Validators.required, Validators.email ]],
    password: ['G4to1995#', [ Validators.required, Validators.minLength(6) ]],
  });


  login(): void { }

}
