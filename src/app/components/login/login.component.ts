import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { C } from '@fullcalendar/core/internal-common';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/interfaces/auth';
import { register } from 'src/app/interfaces/register';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private msgService: MessageService
  ) { }

  get email() {
    return this.loginForm.controls['email'];
  }
  get password() { return this.loginForm.controls['password']; }

  loginUser() {
    const postData = { ...this.loginForm.value };
    const { email, password } = this.loginForm.value;
  
    this.authService.getUserByEmail(postData as User).subscribe(
      (response: any) => { // Assuming 'response' is of type any
        if (response != null) {
  
          // Assuming 'accessToken' is the property name for your access token in the response
          const accessToken = response.accessToken;
          const email = response.doctor.username;
          const username = response.doctor.email;
          const speciality = response.doctor.speciality;
          const phone = response.doctor.phone;
          const id = response.doctor.id;
          const role = response.doctor.role;
          const image = response.doctor.image;
          const rating = response.doctor.rating;
          const followers = response.doctor.followers;
          // Save the data in local storage
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('email', email);
          localStorage.setItem('username', username);
          localStorage.setItem('speciality', speciality);
          localStorage.setItem('phone', phone);
          localStorage.setItem('id', id);
          localStorage.setItem('role', role);
          localStorage.setItem('rating',rating) 
          localStorage.setItem('image',image)
          localStorage.setItem('followers',followers)
          this.router.navigate(['/dashboard/home']);
        

          
        } else {
          this.msgService.add({ severity: 'error', summary: 'Error', detail: 'email or password is wrong' });
        }
      },
      error => {
        this.msgService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
      }
    );
  

    
  }
}
