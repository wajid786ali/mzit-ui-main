import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ApiClientService } from '../service/api-client.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private service: ApiClientService, private router: Router, private toastr: ToastrService) { }

  canActivate() { 
    if (this.service.isMenuVisible()) {
      return true;
    }
    // Show a toast notification instead of an alert
    this.toastr.error('You have not logged in.', 'Access Denied');
    this.router.navigate(['login']);
    return false;
  }
}
