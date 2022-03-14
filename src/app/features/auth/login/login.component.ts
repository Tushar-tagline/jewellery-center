import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'jewellery-center-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public signin!: FormGroup;
  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit(): void {
    this.signin = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-z]).{6,32}$'),
      ]),
    });
  }

  public login() {
    console.log(this.signin, 'signin')
    this.authService.userLogin(this.signin.value.email, this.signin.value.password)
    // .then((value: any) => {
    //   console.log('value :>> ', value.user);
    //   if (value.user.email === 'admin.tushar@gmail.com') {
    //     this.route.navigate(['admin/home'])
    //     return
    //   }
    //   localStorage.setItem('userData', JSON.stringify(value.user))
    //   this.route.navigate(['customer/home'])
    // })
    //   .catch((err: any) => {
    //     console.log('Something went wrong:', err.message);
    //   });

  }
}
