import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import { CookieService } from 'ngx-cookie-service';
import { AsyncPipe, NgIf } from '@angular/common';
import { AuthService } from '../services/auth/auth-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatDividerModule,MatExpansionModule,MatIconModule, NgIf, AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  menuValue!:boolean;
  menu_icon!:string;
  isAuthenticated!: Observable<boolean>;

  constructor(private router : Router, private cookieService: CookieService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.menuValue = false;
    this.menu_icon = 'bi bi-list';
    this.isAuthenticated = this.authService.isAuthenticated();
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

   onLoginPage(){
    this.menuValue = false;
    this.menu_icon = 'bi bi-list';
    if(this.isAuthenticated){
      this.authService.logout();
      this.router.navigateByUrl('/home/auth/');
    } else {
      this.router.navigateByUrl('/home/auth/');
    }
   }

   onCartPage(){
    this.menuValue = false;
    this.menu_icon = 'bi bi-list';
   }
}
