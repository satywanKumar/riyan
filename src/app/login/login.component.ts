import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:ProductService,
              private router:Router) { }
  user:FormGroup;
  isLoading:boolean = false;

  ngOnInit(): void {
    this.user = new FormGroup({
      username:new FormControl(),
      password:new FormControl()
    })
  }

  login()
  {
    this.isLoading = true;
    console.log(this.user.value);
    this.userService.login(this.user.value).subscribe(res=>{
      console.log(res.body.username);
      localStorage.setItem('username',res.body.username);
      localStorage.setItem('email',res.body.email);
      localStorage.setItem('phone',res.body.phone);
      localStorage.setItem('userType',res.body.userType);
      localStorage.setItem('token',res.body.token);
      this.router.navigate(['/dashboard']);
    })
  }

}
