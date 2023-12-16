import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../service/course.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-details-course',
  templateUrl: './details-course.component.html',
  styleUrls: ['./details-course.component.css']
})
export class DetailsCourseComponent {
  course: any;
  displayUpdate=false
displ(){
  this.displayUpdate=!this.displayUpdate
}

  constructor(private route: ActivatedRoute, private router: Router,private service:CourseService,private auth:AuthService) {
    this.decodedToken = this.auth.decodeToken();
   }
decodedToken:any
  ngOnInit(): void {
    // Retrieve the course details from the route parameters
 this.getbyid()
  }
  getbyid(){
       this.route.paramMap.subscribe(params => {
let  courseId = params.get('id');

      // Assuming you have a service that fetches course details by ID
      // Replace this with your actual service call
      this.service.getCoursesById(courseId).subscribe({
        next: course => this.course = course,
        error: err => console.log(err)
      
      });
    });
  }
  onSubmit(f:any){
    this.service.updateCourse(this.course.id,f.value).subscribe({
      next: course=> {this.course = course
      alert("Course updated")
  this.getbyid()
      this.displayUpdate=false
      this.router.navigate(['/list-course'])
  
      },
  
      error: err => console.log(err)
    
    });
    
  
  }


  goBack(): void {
    // Navigate back to the Courses page
    this.router.navigate(['/accueil']);
  }
}
