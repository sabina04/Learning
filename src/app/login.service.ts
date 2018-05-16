import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms'; // For Model Driven
export interface Cat {
  name: string;
}
// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };
@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor(private http: HttpClient) {}
  cars = [
    'Ford','Chevrolet','Buick'
  ];

 login(userDetail) {
  return this.http.post('http://localhost:4300/api/v1/users/login', userDetail,{headers: new HttpHeaders().set('token', "abcd" ) });
  //return this.http.get('http://localhost:4300/api/v1/users/test');
 }
  editEmailOne(userDetail) { console.log('here');
    return this.http.post('http://localhost:4300/api/v1/users/editEmailOne', userDetail,{headers: new HttpHeaders().set('token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MjY0NzUxNjksImRhdGEiOnsidXNlcm5hbWUiOiJ0ZXN0LnN0dWRlbnQiLCJ1c2VyX2lkIjoxNTI1MywidHlwZSI6InN0dWRlbnQifSwiaWF0IjoxNTI2NDcxNTY5fQ.VyKpG-8gYHjgdHR9X0jzRQQnpdcc015og8aBvWQ0hdI" ) });
  }
}
