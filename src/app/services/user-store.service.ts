import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  private fullName$ = new BehaviorSubject<string>("");
  private role$ = new BehaviorSubject<string>("");
  constructor() { }

  private dataArray = new BehaviorSubject<string>("");
  dataArray$ = this.dataArray.asObservable();

  sendData(data: any) {
    this.dataArray.next(data);
  }

  public getRoleFromStore(){
    return this.role$.asObservable();
  }

  public setRoleForStore(role:string){
    this.role$.next(role);
  }

  // public getFullNameFromStore(){
  //   return this.fullName$.asObservable();
  // }

  // public setFullNameForstore(fullName:string){
  //   this.fullName$.next(fullName)
  // }
}
