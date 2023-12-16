import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EtudiantServiceService } from '../service/etudiant-service.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {
  Student:any
  constructor(private route: ActivatedRoute, private router: Router,private service:EtudiantServiceService) { }
displayUpdate=false
displ(){
  this.displayUpdate=!this.displayUpdate
}
onSubmit(f:any){
  this.service.updateStudent(this.Student.id,f.value).subscribe({
    next: Student => {this.Student = Student
    alert("student updated")
this.getbyid()
    this.displayUpdate=false
    this.router.navigate(['/list-students'])

    },

    error: err => console.log(err)
  
  });
  

}
getbyid(){
  this.route.paramMap.subscribe(params => {
    let  StudentId = params.get('id');
    
          // Assuming you have a service that fetches Student details by ID
          // Replace this with your actual service call
          this.service.getstudentById(StudentId).subscribe({
            next: Student => this.Student = Student,
            error: err => console.log(err)
          
          });
        });
}
  ngOnInit(): void {
    this.getbyid()
    // Retrieve the Student details from the route parameters
   
}}
