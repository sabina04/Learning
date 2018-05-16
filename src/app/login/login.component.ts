import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'; // For Model Driven
import {LoginService} from '../../app/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username;
  password;
  userDetail = false;
  formdata;
  someProperty;
  public googleUrl: any;
  public errorMsg: string;
  public userPostData = {
    'username': 'test.student',
    'password' : 'education'
  };

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  //  For Model Driven
    this.formdata = new FormGroup({
        username: new FormControl(""),
        password: new FormControl("")
    });
    
    this.errorMsg = '';
    this.googleUrl = '';
    
  }

  onClickSubmit(userDetail) {
    //console.log(userDetail);
    this.username = userDetail.username;
    this.password = userDetail.password;
    this.loginService.login(userDetail).subscribe(res => console.log('Done'));
    //this.googleUrl = "http://localhost:4300/api/v1/users/login/"
    //this.userDetail = true;
  }

  editEmail() {
    this.loginService.editEmailOne({"user_id" : "3", "email_one" : "prateek.jadhav@a3logics.in"}).subscribe(res => console.log('Done'));
  }
  
 
  // onClickMe() {
  //   this.clickMessage = 'You are my hero!';
  // }

  // values = '';

  // onKey(event: any) { // without type info
  //   this.values += event.target.value + ' | ';
  // }
}
