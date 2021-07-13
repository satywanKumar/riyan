import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import {MatSnackBar,MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition} from '@angular/material/snack-bar';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private prductService:ProductService,
              private router:Router,
              private _snackBar:MatSnackBar) { }
              horizontalPosition: MatSnackBarHorizontalPosition = 'start';
              verticalPosition: MatSnackBarVerticalPosition = 'bottom';


  productList:any;
  isLoading:boolean = false;
  title:String;

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct()
  {
    this.isLoading = true;
    this.prductService.getProduct().subscribe(res=>{
      this.isLoading = false;
      console.log(res.body.Product);
      this.productList = res.body.Product;
     },
     (err)=>
     {
       this.isLoading = false;
       console.log(err.error.msg);
       this._snackBar.open(err.error.msg, 'Done', {
         horizontalPosition: this.horizontalPosition,
         verticalPosition: this.verticalPosition,
       });
     });
  }

  deleteProduct(id)
  {
    this.prductService.deletProduct(id).subscribe(res=>{
      console.log('product deleted');
      this.getProduct();
      this._snackBar.open('product deleted !!', 'Done', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    })
  }

  detail(id)
  {
    this.router.navigate(['/dashboard/detail-product',id]);
  }

  update(id)
  {
    this.router.navigate(['/dashboard/update-product',id]);
  }



}
