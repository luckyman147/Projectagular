import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http';

import { NotFoundComponent } from './not-found/not-found.component';
// import { connecte } from './service/connect.service';

// import { AddProduitComponent } from './add-produit/add-produit.component';

import { DetailsCourseComponent } from './details-course/details-course.component';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { LoginComponent } from './login/login.component';
// import { NavCoursesComponent } from './nav-courses/nav-courses.component';
import { RegisterComponent } from './register/register.component';
import { EtudiantServiceService } from './service/etudiant-service.service';
import { SubjectsComponent } from './subjects/subjects.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListCoursesComponent } from './list-courses/list-courses.component';
// import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,

    AcceuilComponent,

    NotFoundComponent,
    
    
    ListEtudiantComponent,

    DetailsCourseComponent,
    LoginComponent,

    SubjectsComponent,
    RegisterComponent,
    AddCourseComponent,
    StudentDetailsComponent,
    ListCoursesComponent,],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule, BrowserAnimationsModule
  ],
  providers: [EtudiantServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
