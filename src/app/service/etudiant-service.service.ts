import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { etudiant } from '../model/etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantServiceService {
  students:etudiant[]=[]

  constructor(private http:HttpClient) {

  }
 
  getstudentById(id:any):Observable<etudiant>{
    return this.http.get<etudiant>("http://localhost:8088/Student/"+id)


  
  }
  Deletestudent(id:any):Observable<void>{
    return this.http.delete<void>("http://localhost:8088/Student/"+id)
  }

 getAll():Observable<etudiant[]>{
  return this.http.get<etudiant[]>("http://localhost:8088/Students")
}
 addStudent(s:etudiant):Observable<etudiant>{
  return this.http.post<etudiant>("http://localhost:8088/AddStudent",s)
}
updateStudent(id:any,s:etudiant):Observable<etudiant>{
  return this.http.patch<etudiant>("http://localhost:8088/Student/"+id,s,{observe:"body"})
}
}
