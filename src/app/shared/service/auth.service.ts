import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public angularFireAuth: AngularFireAuth) { }

  public login(email: string, password: string): void {
    console.log('password :>> ', password);
    console.log('email :>> ', email);
    this.angularFireAuth.signInWithEmailAndPassword(email, password).then((value: any) => {
      console.log('value :>> ', value);
      console.log('Nice, it worked!');
    })
      .catch((err: any) => {
        console.log('Something went wrong:', err.message);
      });
  }

  public logout(): void {
    this.angularFireAuth.signOut();
  }
}
