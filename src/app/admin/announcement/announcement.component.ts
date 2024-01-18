import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent {

  constructor(private announceService: ApiService, private router: Router,
    private toastMsg: MessageService){ }
    
  announceData:any = {
    title:'',
    subject:'',
    details:''
  }

  onSubmit(){
    debugger
    this.announceService.PostAnnouncement(this.announceData).subscribe ((res)=> {
      console.log({res});
      this.toastMsg.add({ severity: 'success', summary: 'Success', detail: "Succcessfully announcement has made", life: 5500 });
      this.announceData.reset();
    })


  }

}
