import { Component } from '@angular/core';
import { LoginService } from './login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SK';
  head = "Sabina";
  formdata;
  someProperty:string = '';
  constructor(private loginService:LoginService) {}

  ngOnInit() {
    //console.log('hello');
    console.log(this.loginService.cars);

    //this.someProperty = this.loginService.myData();
    //   this.formdata = new FormGroup({
    //     username: new FormControl("angular@gmail.com"),
    //     password: new FormControl("abcd1234")
    // });
  }
}

