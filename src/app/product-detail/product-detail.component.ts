import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,
              private productService:ProductService) { }
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
    })


  }

}
