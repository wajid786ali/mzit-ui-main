import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddClassService {
  [x: string]: any;

  public classItemList: any = []
  public classList = new BehaviorSubject<any>([]);

  constructor() { }

  getStudent() {
    return this.classList.asObservable();
  }

  setStudent(worksheet: any) {
    this.classItemList.push(...worksheet);
    this.classList.next(worksheet);
  }
  addtoCart(worksheet: any) {
    this.classItemList.push(worksheet);
    this.classList.next(this.classItemList); 
    this['getTotalPrice']();
    console.log(this.classItemList)
  } 
  removeCartItem(product: any){
    this.classItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.classItemList.splice(index,1);
      }
    })
    this.classList.next(this.classItemList);
  }
  getTotalClass() : number{
    let grandTotal = 0;
    this.classItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }
}
