import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService : AuthService, private router: Router) { }

  ngOnInit() {
   
  }
  login(username, password) {
    this.authService.login(username, password).subscribe(res => {

      if(res.success) {
        this.router.navigate(['view'])
      } else {
        alert(res.errorMessage);
      }
    });
  }
}
