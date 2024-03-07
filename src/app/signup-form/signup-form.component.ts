import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { User } from '../models/user/user';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.scss'
})
export class SignupFormComponent implements OnInit{

   createUserForm!:FormGroup; 

   constructor(private router: Router,
                private fb: FormBuilder){}

  ngOnInit(): void {
    this.createUserForm = this.fb.group({
      f_name:[null, Validators.required],
      l_name:[null, Validators.required],
      phone:[null, Validators.required],
      adress:[null, Validators.required],
      email:[null, [Validators.required,Validators.email]],
      password:[null, Validators.required],
      role:true
    })
  }

  signup(){
    const newUser = this.createUserForm.value;
    console.log(newUser);
    this.router.navigateByUrl('/');
  }

  login(){
    this.router.navigateByUrl('/auth/')
  }
}
