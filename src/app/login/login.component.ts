import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private auth:AuthService,private route:Router){
    this.connected = this.auth.isLoggedIn();
  }
  connected:any
wrong=""
  login(f:any){
    let data=f.value
    this.auth.login(data).subscribe({
      next:data=>{
        localStorage.setItem('token',data.token)
        this.connected = this.auth.isLoggedIn();
        this.route.navigate(['/accueil'])
      },
      error:err=>{
this.wrong="Something Went wrong ,Check your credentials"
      }
    })
  }
}
