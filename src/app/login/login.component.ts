import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, Form } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;
  message: string = "";
  userError: any;

  constructor(public fb: FormBuilder, public router: Router, public authService: AuthService) { 
    this.myForm = this.fb.group({
      email: ['',[Validators.email, Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  onSubmit(form) {
    this.authService.login(form.value.email,form.value.password).then((res) => {
      console.log(res);
      this.message = "You have been logged in successfully";
      this.router.navigate(['home']);
    }).catch((error) => {
      console.log(error);
      this.userError = error;
    })
  }

  ngOnInit(): void {
  }

}
