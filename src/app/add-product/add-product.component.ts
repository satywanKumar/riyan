import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private productService:ProductService,
              private router:Router,
              private activatedRoute:ActivatedRoute) { }

  newProduct:FormGroup;
  productId:any;
  isId:boolean = false;
  isLoading:boolean = false;

  ngOnInit(): void {
    this.newProduct = new FormGroup({
      _id:new FormControl(),
      imagePath:new FormControl(),
      title : new FormControl(),
      description: new FormControl(),
      mrp:new FormControl(),
      sp:new FormControl,
      discountPercent:new FormControl()
    })

    this.productId = this.activatedRoute.snapshot.params['id'];
    console.log(this.productId);

    if(this.productId != null)
    {
      this.isLoading = true;
      this.isId = true;
      this.productService.getProductById(this.productId).subscribe(res=>{
        this.isLoading = false;
        console.log(res.body.product);
        this.newProduct.setValue(res.body.product);
      })
    }
  }

  save()
  {
    this.isLoading = true;
    console.log(this.newProduct.value);
    if(this.productId != null)
    {
      this.productService.updateProduct(this.productId,this.newProduct.value).subscribe(res=>{
        console.log(res);
        this.router.navigate(['/dashboard/product']);
      })
    }
    else
    {
      this.productService.saveProduct(this.newProduct.value).subscribe(res=>{
        console.log(res);
        this.router.navigate(['/dashboard/product']);
      })
    }
  }

}
