import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthLoginService } from '../../services/login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Corrected property name to 'styleUrls'
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])
  });

  constructor(private router: Router, private authLoginService: AuthLoginService) {}

  login() {
    if (this.loginForm.valid) {
      this.authLoginService.LoginUser(this.loginForm.value).subscribe({
        next: response => {
          console.log('Login successful:', response);
          this.router.navigate(['/homepage']); // Navigate to homepage on successful login
        },
        error: error => {
          console.error('Login error:', error);
          alert('Incorrect email or password');
          this.reset();
        }
      });
    }
  }

  reset() {
    this.loginForm.reset();
  }
}
