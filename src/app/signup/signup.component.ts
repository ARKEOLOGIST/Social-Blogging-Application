import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  myForm: FormGroup;
  message: string = "";
  userError: any;

  constructor(public fb: FormBuilder,public authService: AuthService) { 
    this.myForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    },{
      validator: this.checkIfMatchingPasswords("password","confirmPassword")
    })
  }

  checkIfMatchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (group: FormGroup) => {
      let password = group.controls[passwordKey];
      let confirmPassword = group.controls[confirmPasswordKey];
      console.log(password);
      console.log(confirmPassword);

      if (password.value == confirmPassword.value)
      {
        return;
      }
      else {
        confirmPassword.setErrors({
          notEqualToPassword: true
        })
      }
    }
  }

  onSubmit(signupForm) {
    let email: string = signupForm.value.email;
    let password: string = signupForm.value.password;
    let firstName: string = signupForm.value.firstName;
    let lastName: string = signupForm.value.lastName;

    this.authService.signup(email,password,firstName,lastName).then(() => {
      this.message = "You have been signed up successfully. Please login.";
    }).catch((error) => {
      this.userError = error;
    })   
  }

  ngOnInit(): void {
  }

}
