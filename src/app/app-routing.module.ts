// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { ChatComponent } from './components/pages/chat/chat.component';
import { DoctorProfileComponent } from './components/pages/doctor-profile/doctor-profile.component';
import { AddPatientProfilComponent } from './components/pages/add-patient-profil/add-patient-profil.component';
import { PatientProfileComponent } from './components/pages/patient-profile/patient-profile.component';
import { CalendarComponent } from './components/pages/calendar/calendar.component';
import { Page404Component } from './components/pages/errors/page-404/page-404.component';
import {  PostComponent } from './components/pages/post/post.component';
import { PatientComponent } from './components/pages/patient/patient.component';
import { bookingslistComponent } from './components/pages/bookings-list/bookings-list.component';
import { DoctorEditeProfileComponent } from './components/pages/doctor-edite-profile/doctor-edite-profile.component';
import { SubscriptionComponent } from './components/pages/subscription/subscription.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
   {
  path: "dashboard",
  children: [
    {
      path: "home",
      canActivate: [AuthGuard], // Protect 'home' route
      async loadComponent() {
        return (await import('./components/pages/home/home.component')).HomeComponent;
      },
    },
  ],
},
  // {
  //   path: 'home',
  //   component: HomeComponent,
  // },
  {
    path: "chat",
    component: ChatComponent,
  },
  {
    path: "calendar",
    component: CalendarComponent,
  },
  {
    path: "MyProfile",
    component: DoctorProfileComponent,
  },
  {
    path: "patient",
    component: PatientProfileComponent,
  },
  {
    path: "401",
    component: Page404Component,
  },
  {
    path: "editpatientprofile",
    component: AddPatientProfilComponent,
  },
  {
    path: "patientprofiles",
    component: PatientComponent,
  },
  {
    path: "managebookings",
    component: bookingslistComponent,
  },
  {
    path:"post",
    component: PostComponent,
  },
{
    path: 'editdoctorprofile',
    component: DoctorEditeProfileComponent,
},

{
    path:'subscription',
    component:   SubscriptionComponent
},
{
    path: 'privacy',
    component: PrivacyPolicyComponent,
},
  {
    path: '',
    redirectTo: 'dashboard/home', 
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }
