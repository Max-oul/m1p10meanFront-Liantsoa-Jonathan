import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import {environment} from '../../../environments/environment';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  constructor(private http: HttpClient, private cookieService: CookieService) { }
  login(email: string, password: string) {
    return this.http.post(`${environment.apiUrl}users/login`, {
      email,
      password
    })
    .pipe(tap((response: any) => {
      this.cookieService.set('user-data', JSON.stringify(response));
    }));
  }
  logout() {
    this.cookieService.delete('user-data');
  }

  isAuthenticated() {
    const isAuthenticated = this.cookieService.check('user-data');
    return of(isAuthenticated);
  }
}
