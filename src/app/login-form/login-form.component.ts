import { Component } from '@angular/core';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../services/auth/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  constructor(private authService: AuthService, private router: Router) {}
  
  onSubmit() {
    if (this.email.valid && this.password.valid) {
      this.authService
        .login(this.email.value ?? '', this.password.value ?? '')
        .subscribe({
          next: (reponse) => {
            console.log('Login successful');
            this.router.navigate(['/home']);
          },
          error: (error) => {
            console.log('Login failed');
          },
        });
    }
  }
  signup(){
    this.router.navigateByUrl('home/signup/')
  }
}
