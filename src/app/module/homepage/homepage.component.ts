import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UtilityService } from 'src/app/sarvices/utility.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  contactlist: Array<any> = [];
  saveFlag: boolean = true;
  constructor(private router:Router,private utility:UtilityService){}
  ngOnInit():void{
    this.getAllContactList();
  }
getAllContactList():void{
  this.contactlist=this.utility.getcontacts();
  console.log(this.contactlist)
}
  add(){
    this.router.navigateByUrl('')
  }
delete(index:number):void{
alert("confirm")
this.utility.Deletecontact(index);
  }
  editContact(index:number):void {
    this.router.navigate([''], { queryParams: { index: index } });
  }
}

