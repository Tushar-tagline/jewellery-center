import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/shared/service/userservice.service';

@Component({
  selector: 'jewellery-center-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient,private userService:UserserviceService) { }

  ngOnInit(): void {

  }
  public loginSubmit(event:any){
   this.userService.signIn(event.value).subscribe((res)=>{
    console.log(res)
   })
    
  }
}
