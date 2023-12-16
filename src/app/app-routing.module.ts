import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';

import { NotFoundComponent } from './not-found/not-found.component';



import { AddCourseComponent } from './add-course/add-course.component';
import { DetailsCourseComponent } from './details-course/details-course.component';
import { ListCoursesComponent } from './list-courses/list-courses.component';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StudentDetailsComponent } from './student-details/student-details.component';



const routes: Routes = [

  { path: 'Login', component:LoginComponent },
  { path: 'accueil', component:AcceuilComponent},

  { path: 'Coursedetails/:id', component:DetailsCourseComponent},
  { path: 'Register', component:RegisterComponent},
  { path: 'addCourse', component:AddCourseComponent},
  { path: 'list-students', component:ListEtudiantComponent},
  { path: 'list-course', component:ListCoursesComponent},
  { path: 'students_details/:id', component:StudentDetailsComponent},

  { path: '', redirectTo:"/Login",pathMatch:"full"},
  { path: '**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
