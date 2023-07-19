import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mind Zone Institute';

  customer_email: string;
  isMenuVisible = true;

  constructor(private route: Router) { }

  ngDoCheck(): void {
    let currentroute = this.route.url;
    if (currentroute == '/login' /*|| currentroute == '/register'*/) {
      this.isMenuVisible = false
    } else {
      this.isMenuVisible = true
    }
  }

} 