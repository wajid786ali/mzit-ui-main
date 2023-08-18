import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  
  isadmin=true;
   

  constructor(private router: Router){
    let custType=sessionStorage.getItem('custType');
    if(custType=='Admin'){
      this.isadmin=true;
    }
  }

  ngDoCheck(): void { 
    let custType=sessionStorage.getItem('custType');
    if (custType == 'Admin') {
      this.isadmin = true;
      //console.log(custType)
    }else{
      this.isadmin = false;
    }
  }

  ngOnInit(): void {
     
  }

  logout(): void { 
    sessionStorage.setItem('custName', "");
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
 
  getData(key:string){
    return sessionStorage.getItem(key);
  }
}