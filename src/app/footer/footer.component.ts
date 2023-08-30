import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

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
}
