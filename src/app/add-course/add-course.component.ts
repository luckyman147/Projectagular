import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../service/course.service';
// import { Router } from 'express';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  constructor(private cs:CourseService,private route:Router){}
  wrongPl=""

  onSubmit(f:any){
    let data=f.value
    console.log(data)
    if (data.contenu.length==0){
      this.wrongPl="Please Fill this"
    }
    this.cs.addCourses(data).subscribe({
      next:data=>{
        alert('Course added')
        this.route.navigate(['/accueil'])

      },
      error:err=>{
        console.log(err)
      }
    })
  }

}
