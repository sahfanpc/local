import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilityService } from 'src/app/sarvices/utility.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

constructor(private router:Router,private fb:FormBuilder,private utility:UtilityService){}
loginform=this.fb.group({
  name:["",Validators.required],
  date:["",Validators.required],
  number:["",Validators.required]
})
ngOnInit():void{

}

submit(data:any){
  if(this.loginform.valid){
    console.log(data)
    this.utility.Addcondact({name:data.name,dob:data.date,number:data.number})
  }else{
    alert("please fill")
  }
}

}


