import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class SwapService {
private user = new BehaviorSubject<string>('Test');
cast = this.user.asObservable();
  constructor() { }

  editUser(newUser) {
    this.user.next(newUser);
  }
}
