import { Component, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.scss'
})
export class SignupFormComponent implements OnInit{

   user!:User;  

   constructor(private router: Router){}

  ngOnInit(): void {
    this.user = {
      usetrId:1,
      f_name:'',
      l_name:'',
      phone:0,
      adress:'',
      email:'',
      password:'',
    }   
  }

  signup(){

  }

  login(){
    this.router.navigateByUrl('home/login/')
  }
}
