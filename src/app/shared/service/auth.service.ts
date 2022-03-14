import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public angularFireAuth: AngularFireAuth, private route: Router) { }

  public userLogin(email: string, password: string): any {
    console.log('password :>> ', password);
    console.log('email :>> ', email);
    this.angularFireAuth.signInWithEmailAndPassword(email, password).then((value: any) => {
      console.log('value :>> ', value.user);
      if (value.user.email === 'admin.tushar@gmail.com') {
        this.route.navigate(['admin/home'])
        return
      }
      localStorage.setItem('userData', JSON.stringify(value.user))
      this.route.navigate(['customer/home'])
    })
      .catch((err: any) => {
        console.log('Something went wrong:', err.message);
      });

   }

  public logout(): void {
    this.angularFireAuth.signOut();
  }
}
