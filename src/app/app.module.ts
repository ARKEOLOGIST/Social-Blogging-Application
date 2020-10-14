import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import * as firebase from 'firebase/app';
import 'firebase/auth';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { CreateComponent } from './create/create.component';

import { NgxEditorModule } from 'ngx-editor';
import { HttpClientModule } from '@angular/common/http';


var firebaseConfig = {
  apiKey: "AIzaSyDh4L2SHb2bJXy4dnUFYauyQgVNz_2lCjU",
  authDomain: "scribe-97128.firebaseapp.com",
  databaseURL: "https://scribe-97128.firebaseio.com",
  projectId: "scribe-97128",
  storageBucket: "scribe-97128.appspot.com",
  messagingSenderId: "816322101182",
  appId: "1:816322101182:web:729c61671a25a34e6683ef"
};
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    MyblogsComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
