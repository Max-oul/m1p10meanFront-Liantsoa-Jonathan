import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../../environments/environment';
import { tap } from 'rxjs/operators';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authStatus = new BehaviorSubject<boolean>(
    this.cookieService.check('user-data')
  );
  constructor(private http: HttpClient, private cookieService: CookieService) {}
  login(email: string, password: string) {
    return this.http
      .post(`${environment.apiUrl}users/login`, {
        email,
        password,
      })
      .pipe(
        tap((response: any) => {
          this.cookieService.set('user-data', JSON.stringify(response));
          this.authStatus.next(true);
        })
      );
  }
  logout() {
    this.cookieService.delete('user-data');
    this.authStatus.next(false);
  }
  isAuthenticated():Observable<boolean>{
    return this.authStatus.asObservable();
  }
}
