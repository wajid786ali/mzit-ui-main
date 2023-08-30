import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private router: Router){}

  isCenterType = false;

  checkUserRole(): void {
    const custCenter = sessionStorage.getItem('custCenter');
    this.isCenterType = custCenter === 'Downtown';
  }

  ngDoCheck(): void {  
    this.checkUserRole();
  }

  ngOnInit(): void {
    this.checkUserRole();
  }
   

  register(){
    this.router.navigate(['register']);
  }

  students(){
    this.router.navigate(['view']);
  }

}
