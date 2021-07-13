import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(product:any[],title:String): unknown {
    console.log(product,title);
    if(title == undefined)
    {
      return product;
    }
    return product.filter(product=>product.title.toLowerCase().indexOf(title.toLowerCase()) !== -1)
  }

}
