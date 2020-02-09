import { Component, OnInit } from '@angular/core';
import { IUser } from '../../interfaces/IUser';

import { Store, select } from '@ngrx/store';
import * as Auth from '../Actions/auth.action';
import * as fromAuth from '../../reducers/reducers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: IUser;
  error$ = this.store.pipe(select(fromAuth.getAuthError));
  isLoading$ = this.store.pipe(select(fromAuth.getAuthLoading));

  constructor(private store: Store<fromAuth.State>) {
    console.log(this.store.pipe(select(fromAuth.getAuthLoading)));
  }


  ngOnInit() {
    this.user = {
      username: 'robert',
      email: 'est@test.com',
      password: '123'
    };
  }

  login() {
    this.store.dispatch(new Auth.LoginUser({user: this.user}));
  }
}
