import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EtudiantServiceService } from '../service/etudiant-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private studentSer:EtudiantServiceService,private route:Router){

  }
  onSubmit(f: any): void {
    console.log(f.value)
    // Remove the confirmPassword field from the form value
    const { confirmPassword, ...formDataWithoutConfirm } = f.value;
  
    // Check if password and confirmPassword are equal
    if (f.value.password !== confirmPassword) {
      // Handle the case where passwords do not match (e.g., show an error message)
      console.log('Passwords do not match');
      return;
    }
  
    // Continue with the form submission
    console.log(formDataWithoutConfirm);
  
    this.studentSer.addStudent(formDataWithoutConfirm).subscribe({
      next: (data) => {
        alert('Student added');
        this.route.navigate(['/Login']);
      },
      error: (err) => console.log(err),
    });
  }
}
