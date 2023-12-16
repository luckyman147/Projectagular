import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { etudiant } from '../model/etudiant';
import { AuthService } from '../service/auth.service';
import { EtudiantServiceService } from '../service/etudiant-service.service';

@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.css']
})
export class ListEtudiantComponent {
  students:etudiant[]=[]
  decodedToken:any
  constructor(private st:EtudiantServiceService,private route:Router,private auth:AuthService){
    this.decodedToken = this.auth.decodeToken();
    // console.log(this.prod.produit)
    
  }
  ngOnInit(): void {
this.st.getAll().subscribe({
  next:data=>{
    this.students=data
    this.studentsCopy=this.students
    this.studentsCopy=this.filterStudents(this.decodedToken.Studentname)
    console.log(this.decodedToken)
   console.log(this.studentsCopy)
    //filter when 
  },
  error:err =>console.error('Erreur :'+err),
})
  }
  filterStudents(decoed: any): etudiant[] {
   
    return this.studentsCopy.filter(student => 
      student.Studentname !== decoed
);
  }
studentsCopy=this.students
delete(id:any){
  this.st.Deletestudent(id).subscribe({
    next: (data )=>{alert("student deleted")
    this.route.navigate(['/list-student']).then(() => {
      window.location.reload();
    })
    
    }})
}

valeur="Masquer"
afficher(){
  if(this.valeur=="Masquer"){
    this.valeur="Afficher"
  }else{
    this.valeur="Masquer"
  }
}



set vfilter(a:string){
  this.studentsCopy=this.students.filter((x=>x.Studentname.indexOf(a)!=-1))
}}
