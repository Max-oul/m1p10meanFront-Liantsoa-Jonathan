import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface ILoginResponse {
  success: boolean;
  data:Record<string, unknown>[]
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public login (email:string, password: string) : Observable<any> {
    return this.http.post<ILoginResponse>(this.apiUrl, {email, password});
  }

  public logout () : void {
    
  }
}
