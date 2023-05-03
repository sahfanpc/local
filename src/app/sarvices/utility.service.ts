import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

list:Array<any>=[]

  constructor() { }

  Addcondact(data:any):void{
this.list.push(data)
  }

  Deletecontact(index:number):void{
this.list.splice(index,1);
  }

  findindex(data:any):number{
const index : number = this.list.findIndex(element => element === data)
return index;
  }

  getcontacts():Array<any>{
return this.list;
  }
}
