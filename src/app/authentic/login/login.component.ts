import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {IUser} from "../../model/user";
import {NavigatorService} from "../../core/services/navigator.service";

@Component({
  selector: 'hija-login',
  templateUrl: './login.component.html',
  styleUrls: [
      './login.component.css'
  ]
})
export class LoginComponent implements OnInit {
  loginForm = this.formBuilder.group({
    firstName:[''],
    lastName:[''],
    email: ['', Validators.required],
    password: ['', Validators.required]
  });
  constructor(
      private formBuilder: FormBuilder,
      private router$: NavigatorService) { }

  ngOnInit(): void {
  }

  submit() {
    const user = { ...this.loginForm.value } as IUser;
    console.log(user);
    if (this.loginForm.valid) {
      // const user = { ...this.loginForm.value } as IUser;
        this.add(user);
    }
  }
  add(user: IUser) {
    // this.customersService.add(customer);
    this.router$.goToAdmin();
  }
}
