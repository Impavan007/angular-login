import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/signup.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private router: Router, private authService: AuthService) {}

  register(regForm: NgForm) {
    if (regForm.valid) {
      this.authService.registerUser(regForm.value).subscribe({
        next: response => {
          console.log('Registration successful:', response);
          this.router.navigate(['/login']);
        },
        error: error => {
          console.error('Registration error:', error);
        }
      });
    }
  }


  reset(regForm: NgForm) {
    regForm.reset();
  }
}
