import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../model/Course';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courses:Course[]=[]

  constructor(private http:HttpClient) {

  }
  filterItemsByName(name: string): any[] {
    if (name) {
      // Filter the items based on the selected name
      return this.courses.filter(item => item.Subject === name);
    } else {
      // If no name is selected, return all items
      return this.courses;
    }
  }
 //update course
  updateCourse(id:any,s:Course):Observable<Course>{
    return this.http.patch<Course>("http://localhost:8088/Courses/"+id,s,{observe:"body"})
  }
  getCoursesById(id:any):Observable<Course>{

    return this.http.get<Course>("http://localhost:8088/Courses/"+id)
  }
  DeleteCourses(id:any):Observable<void>{
    return this.http.delete<void>("http://localhost:8088/Courses/"+id)
  }

 getAll():Observable<Course[]>{
  return this.http.get<Course[]>("http://localhost:8088/Courses")
}
 addCourses(s:Course):Observable<Course>{
  return this.http.post<Course>("http://localhost:8088/AddCourses",s)
}
}
