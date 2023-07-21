import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private router: Router, private tostr: ToastrService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    let role = sessionStorage.getItem('custType');

    if (role === 'Admin') {
      return true;
    } else {
      // Show error message and redirect to home page
      this.tostr.error('Permission Denied. Please contact the Admin.', 'Access Denied', {
        timeOut: 3000,
      });
      this.router.navigate(['/home']);
      return false;
    }
  }
}