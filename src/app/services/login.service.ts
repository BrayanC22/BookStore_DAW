import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LoginService {

  private username = new BehaviorSubject<string>('');
  private logged = new BehaviorSubject<boolean>(false);

  public getUsername = this.username.asObservable();
  public getLogged = this.logged.asObservable();

  usuariosValidos:any[]=[{username:"oscar", password:"123456"}, {username:"yermin", password:"123456"}, {username:"BrayanC22", password:"123456"}, {username:"kevin", password:"123456"}, {username:"peter", password:"123456"}];

  constructor() {}

  public setUsername(msg: string): void {
    this.username.next(msg);
  }
  public login(username: string, password: string): boolean {
    if(this.usuariosValidos.find(x=>username==x.username&&password ==x.password)){
        this.logged.next(true);
        this.username.next(username);
        return true;
    }else{
        this.logged.next(false);
        return false;
    }
    
  }
}