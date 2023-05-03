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
  butt:boolean=false;

contactlist:Array<any>=[];
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
// console.log(index)
alert("confirm")
this.butt=true;
 
    
this.utility.Deletecontact(index);
}
onButtonClick() {
  console.log('Button clicked!');
}


}

