import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private prductService:ProductService,
              private router:Router) { }

  productList:any;
  isLoading:boolean = false;

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
     });
  }

  deleteProduct(id)
  {
    this.prductService.deletProduct(id).subscribe(res=>{
      console.log('product deleted');
      this.getProduct();
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
