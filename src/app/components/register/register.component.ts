import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { register } from 'src/app/interfaces/register';
import { AuthService } from 'src/app/services/auth.service';
import { passwordMatchValidator } from 'src/app/shared/password-match.directive';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm = this.fb.group({
    phone: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    username: ['', Validators.required],
    password: ['', Validators.required],
    specialty: ['', Validators.required]
  }, {
    validators: passwordMatchValidator
  });


  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService,
    private router: Router
  ) { }

  get phone() {
    return this.registerForm.controls['phone'];
  }

  get email() {
    return this.registerForm.controls['email'];
  }

  get username() {
    return this.registerForm.controls['username'];
  }

  get password() {
    return this.registerForm.controls['password'];
  }

  get specialty() {
    return this.registerForm.controls['specialty'];
  }
  // getLocation(): Promise<any> {
  //   return new Promise((resolve, reject) => {
  //     if ('geolocation' in navigator) {
  //       navigator.geolocation.getCurrentPosition(
  //         (position) => {
  //           resolve({
  //             lat: position.coords.latitude,
  //             lng: position.coords.longitude

  //           });
  //         },
  //         (error) => {
  //           reject(error);
  //         }
  //       );
  //     } else {
  //       reject('Geolocation is not supported by this browser.');
  //     }
  //   });}

  submitDetails() {
    const postData = { ...this.registerForm.value };
    this.authService.registerDoctor(postData as register).subscribe(
      response => {
        if (response!=null) { // Check if the response is successful
          console.log('Doctor registered successfully!');

          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Doctor registered successfully' });
          this.router.navigate(['/login']);
        } else {
          console.log('Unexpected response:', response);
          this.messageService.add({ severity: 'error', summary: 'sorryyy', detail: 'Something went wrong the email or password is used' });
        }
      },
      error => {
        console.log('Error during registration:', error);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong during registration' });
      }
    );
  }

  }
