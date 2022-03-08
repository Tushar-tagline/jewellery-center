import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'jewellery-center-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private route:Router) { }

  ngOnInit(): void {
    
  }
  public login(){
    this.authService.login('customer.tushar@gmail.com', '123456');
    this.route.navigate(['customer/home'])
    
  }
}
