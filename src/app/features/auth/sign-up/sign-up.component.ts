import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'jewellery-center-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public signup!: FormGroup;
  public role: Array<any> = [{
    id: '1',
    value: 'admin'
  },
  {
    id: '2',
    value: 'customer'
  }
  ]
  constructor( private angularFireAuth: AngularFireAuth) { }

  ngOnInit(): void {
    this.signup = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      ]),
      password: new FormControl(null, Validators.required),
      role: new FormControl(null, Validators.required)
    });
  }
  public onSubmit() {
    console.log(this.signup);
    
    return this.angularFireAuth
      .createUserWithEmailAndPassword(this.signup.value.email, this.signup.value.password)
      .then((result) => {
        console.log(result,"result")
        this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  SetUserData(user: any) {
    // const userRef: AngularFirestoreDocument<any> = this.angularFirestore.doc(
    //   `users/${user.userid}`
    // );
    // const userData = {
    //   userid: user.userid,
    //   email: user.email,
    //   name: user.name,
    //   role: user.role
    // };
    // return userRef.set(userData, {
    //   merge: true,
    // });
  }

}
