import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import {MatSnackBar,MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition} from '@angular/material/snack-bar';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,
              private productService:ProductService,
              private _snackBar:MatSnackBar) { }
              horizontalPosition: MatSnackBarHorizontalPosition = 'start';
              verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  product:any;
  id:any;
  isLoading:boolean = false;

  ngOnInit(): void {
    this.isLoading = true;
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log(this.id);
    this.productService.getProductById(this.id).subscribe(res=>{
      this.isLoading = false;
      console.log(res.body.product);
      this.product = res.body.product;
    },
    (err)=>
    {
      this.isLoading = false;
      console.log(err.error.msg);
      this._snackBar.open(err.error.msg, 'Done', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    })


  }

}
