import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatIconModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent implements OnInit{
  hide = true;
  // email = new FormControl('', [Validators.required, Validators.email]);
  // password = new FormControl('',[Validators.required]);
  email:string = 'jonathanmalala0536@gmail.com';
  password:string = ''

  constructor(private router: Router){}

  ngOnInit(): void {
      this.email = this.email;
  }

  login(){
    console.log(this.email,this.password)
  }
  signup(){
    this.router.navigateByUrl('home/signup/');
  }
}
