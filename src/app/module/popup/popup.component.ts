import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from 'src/app/sarvices/utility.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
 
  constructor(private router:Router,private utility:UtilityService){}
  ngOnInit():void{

  }
  
  }
  
