import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
connected=false
constructor(private auth:AuthService,private route:Router){
  this.connected = this.auth.isLoggedIn();
  this.decodedToken = this.auth.decodeToken();
}
decodedToken:any

logout(){

  this.auth.logout()
  this.route.navigate(['/Login'])
console.log(this.connected)
}
login(){
  this.route.navigate(['/Login'])
}
}
