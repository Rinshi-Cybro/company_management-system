import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent {
  constructor(private router: Router){}

  logOut(){
    // sessionStorage.removeItem('login_user_id')
    sessionStorage.clear();
  //  var id=sessionStorage.getItem('login_user_id');
  //  console.log(id);
  //  console.log('id...........');
    this.router.navigate([`login`]);
  }

}
