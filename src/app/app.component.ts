import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mind Zone Institute';
  customer_email:string;


  dataSave(){
    sessionStorage.setItem('name', 'Sanjeev');
  }

  get(){
    return sessionStorage.getItem('name');
  }
}
