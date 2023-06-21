import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'; 
import { Router } from '@angular/router';
import { UserName } from '../entity/userName';
import { ApiClientService } from '../service/api-client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit {
  mzlCenter:any;
  login:any;
  password:any;
  userName: UserName = new UserName();
  userNames: any;

  loginForm = new FormGroup({
    email : new FormControl(''),
    password : new FormControl(''),
  });

<<<<<<< HEAD
  constructor(private auth: AuthService, private apiService: ApiClientService,private router: Router){}
=======
  constructor(private router: Router){}

>>>>>>> 26490e5341085326a4db8cd74843a743fa3cdcf4
  ngOnInit(): void {
    
  }

<<<<<<< HEAD
  
  
  onSubmit(userName: UserName) {
    let response = this.apiService.checkUserName(userName);
    response.subscribe((data) => {
      this.userName = data; 
      this.router.navigate(['/home']);
    });
  }

  /*
=======
>>>>>>> 26490e5341085326a4db8cd74843a743fa3cdcf4
  onSubmit(): void {
    console.log(this.loginForm.value)
  }
  
 /* onSubmit(): void {
    this.mzlCenter="MindZone Learning";
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe(
        (result) => {
          console.log(result);
          this.router.navigate(['/home']);
        },
        (err: Error) => {
          alert(err.message);
        }
      );
    }
<<<<<<< HEAD
=======
  }*/
>>>>>>> 26490e5341085326a4db8cd74843a743fa3cdcf4
  
  }
    */
}