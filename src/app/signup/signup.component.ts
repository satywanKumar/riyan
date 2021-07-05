import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import {MatSnackBar,MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition} from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:ProductService,
              private router:Router,
              private _snackBar:MatSnackBar) { }
    horizontalPosition: MatSnackBarHorizontalPosition = 'start';
    verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  user:FormGroup;
  isLoading:boolean = false;

  ngOnInit(): void {
    this.user = new FormGroup({
      username:new FormControl(),
      password:new FormControl(),
      phone:new FormControl(),
      email:new FormControl(),
      userType:new FormControl()
    })
  }

  signup()
  {
    this.isLoading = true;
    console.log(this.user.value);
    this.userService.signup(this.user.value).subscribe(res=>{
      this.router.navigate(['/login'])
      console.log(res);
      this._snackBar.open('Account created successfully !!', 'Done', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    })
  }

}
