import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, Form } from '@angular/forms';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;
  message: string = "";
  userError: any;

  constructor(public fb: FormBuilder) { 
    this.myForm = this.fb.group({
      email: ['',[Validators.email, Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  onSubmit(form) {
    firebase.auth().signInWithEmailAndPassword(form.value.email,form.value.password).then((res) => {
      console.log(res);
      this.message = "You have been logged in successfully";
    }).catch((error) => {
      console.log(error);
      this.userError = error;
    })
  }

  ngOnInit(): void {
  }

}
