import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';


@Component({
  selector: 'app-myblogs',
  templateUrl: './myblogs.component.html',
  styleUrls: ['./myblogs.component.css']
})
export class MyblogsComponent implements OnInit {

  user: any = {};
  posts: any = [];
  constructor() { 
    this.user = firebase.auth().currentUser;
  }

  ngOnInit(): void {
  }

  getPosts() {
    firebase.firestore().collection("posts").get().then((querysnapShot) => {
      console.log(querysnapShot.docs);
      this.posts = querysnapShot.docs;
    })
  }

  onPostCreated() {
    this.posts = [];
    this.getPosts();
  }

}
