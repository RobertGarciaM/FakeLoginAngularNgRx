import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, tap, exhaustMap } from 'rxjs/operators';

import { LoggedUser } from '../actions/auth.action';
import { AuthService } from '../service/auth.service';
import { LoggedUserError, AuthActionTypes, LoginUser } from '../Actions/auth.action';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class AuthEffects {

    constructor(private http: HttpClient, private actions$: Actions, private authServices: AuthService,
                private router: Router ) {}

    @Effect()
    LoginUserError$: Observable<Action> = this.actions$.pipe(
        ofType<LoggedUserError>(AuthActionTypes.LoginUserError),
        tap(v =>  console.log('LoggerApi Error', v.payload)
        ),
        map(data => {
            console.log('Error Data');
            return { type: 'LOGIN_API_ERROR', payload: 'Email or password incorrrect'}; })
    );

    @Effect()
    LoginUser$: Observable<Action> = this.actions$.pipe(
        ofType<LoginUser>(AuthActionTypes.LoginUser),
        tap(v => console.log('login user effect', v)),
        map(action => action.payload),
        exhaustMap(auth => { return this.authServices.login(auth.user)
        .pipe(map(response => new LoggedUser(response)),
        catchError(error => of(new LoggedUserError(error)))
        ); }
    ));

    @Effect({ dispatch: false })
    LoggedUser$: Observable<Action> = this.actions$.pipe(
        ofType<LoggedUser>(AuthActionTypes.LoggedUser) // ,
        // tap(v => this.router.navigate(['/chats']))
    );

}
