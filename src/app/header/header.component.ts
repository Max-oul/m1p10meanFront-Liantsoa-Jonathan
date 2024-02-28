import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatDividerModule,MatExpansionModule,MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  constructor(private router : Router){
  }

  menuValue!:boolean;
  menu_icon!:string;

  ngOnInit(): void {
    this.menuValue = false;
    this.menu_icon = 'bi bi-list'
  }

  openMenu(){
     this.menuValue =! this.menuValue ;
     this.menu_icon = this.menuValue ? 'bi bi-x' : 'bi bi-list';
   }

   onHomePage(){
    this.router.navigateByUrl('/home');
    this.menuValue = false;
    this.menu_icon = 'bi bi-list';
   }

  onContactUsPage() {
      this.menuValue = false;
      this.menu_icon = 'bi bi-list';
  }

   onSignPage(){
    this.menuValue = false;
    this.menu_icon = 'bi bi-list';
    this.router.navigateByUrl('/home/auth/');
   }

   onCartPage(){
    this.menuValue = false;
    this.menu_icon = 'bi bi-list';
   }
}
