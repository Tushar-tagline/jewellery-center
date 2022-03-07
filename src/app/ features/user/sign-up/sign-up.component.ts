import { Component, OnInit } from '@angular/core';
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
  constructor() { }

  ngOnInit(): void {
    this.signup = new FormGroup({
      name: new FormControl(null, Validators.required),
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
      role: new FormControl(null, Validators.required)
    });
  }
  public onSubmit() {

  }

}
