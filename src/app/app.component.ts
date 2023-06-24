import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mind Zone Institute';
  customer_email:string;

  constructor(private route : Router){}

  isMenuVisible=true;

  ngDoCheck(){
    const currentroute=this.route.url;
    if(currentroute=='/login'){
      this.isMenuVisible=false;
    }else{
      this.isMenuVisible=true;
    }
  }

  dataSave(){
    sessionStorage.setItem('name', 'Sanjeev');
  }

  get(){
    return sessionStorage.getItem('custType');
  }
}
