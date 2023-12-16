import { Component } from '@angular/core';
import { Course } from '../model/Course';
import { CourseService } from '../service/course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent {
  Coursess:Course[]=[]
  
  constructor(private st:CourseService,private route:Router){
    // console.log(this.prod.produit)
    
  }
  ngOnInit(): void {
this.st.getAll().subscribe({
  next:data=>{
    this.Coursess=data
    this.CoursesCopy=this.Coursess
  },
  error:err =>console.error('Erreur :'+err),
})
  }

CoursesCopy=this.Coursess
delete(id:any){
  this.st.DeleteCourses(id).subscribe({
    next: (data )=>{alert("Courses deleted")
    this.route.navigate(['/list-Courses']).then(() => {
      window.location.reload();
    })
    
    }})
}
set vfilter(a:string){
  this.CoursesCopy=this.Coursess.filter((x=>x.Subject.indexOf(a)!=-1))
}
valeur="Masquer"
afficher(){
  if(this.valeur=="Masquer"){
    this.valeur="Afficher"
  }else{
    this.valeur="Masquer"
  }
}}
