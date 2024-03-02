import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule,MatIconModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent implements OnInit{
  hide = true;
  // email = new FormControl('', [Validators.required, Validators.email]);
  // password = new FormControl('',[Validators.required]);
  email:string = 'jonathanmalala0536@gmail.com';
  password:string = ''

  ngOnInit(): void {
      this.email = this.email;
  }

  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }

  login(){
    console.log(this.email,this.password)
  }
  createAccount(){}
}
