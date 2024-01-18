import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-common-sidebar',
  templateUrl: './common-sidebar.component.html',
  styleUrls: ['./common-sidebar.component.css']
})
export class CommonSidebarComponent {

  constructor(private router: Router, private toastMsg: MessageService){

  }
  
  HrLogOut(){
    // sessionStorage.removeItem('login_user_id')
    sessionStorage.clear();
    //  var id=sessionStorage.getItem('login_user_id');
    //  console.log(id);
    //  console.log('id...........');
    this.toastMsg.add({ severity: 'success', summary: 'Success', detail: "You have succcessfully logout", life: 5500 });
    this.router.navigate([`login`]);
  }

}
