import { Component, OnInit } from '@angular/core';
import { Course } from '../model/Course';
import { etudiant } from '../model/etudiant';
import { AuthService } from '../service/auth.service';
import { CourseService } from '../service/course.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
  decodedToken:any
  constructor(private courseService:CourseService,private auth:AuthService){
    this.decodedToken = this.auth.decodeToken();
    console.log(this.decodedToken)
  }
  name:string="";
  ngOnInit(): void {
this.getall()
   
   
  } 
  getall():void{
    this.courseService.getAll().subscribe({
      next:data=>{
        this.courses=data
        this.coursesCopy=this.courses
      },
      error:err=>console.log(err)
   })
  }
  courses:Course[]=[]
  coursesCopy=this.courses
  student:etudiant[]=[]
  set vfilter(a:string){
    this.coursesCopy=this.courses.filter((x=>x.Subject.indexOf(a)!=-1))
  }
  getRandomColor(): { [key: string]: string } {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16); // Generate a random hex color
    return { 'background-color': randomColor };
  }
find(name:string){
  this.coursesCopy=this.courses.filter((x=>x.Subject.indexOf(name)!=-1))
}
}
