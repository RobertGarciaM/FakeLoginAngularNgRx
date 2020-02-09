import { Action } from '@ngrx/store';
import { IUser } from '../../interfaces/IUser';

export enum AuthActionTypes {
    LoggedUser = '[Auth] LOGED_USER',
    LoginUser = '[Auth] LOGIN_USER',
    LoginUserError = '[Auth] LOGIN_USER_ERROR',
    LoginIn = '[Auth] LOGGER_IN',
    LogoautAuth = '[Auth] LOGOUT_USER'
}

export class LoggedIn implements Action {
    readonly type = AuthActionTypes.LoginIn;
    constructor(public payload: { isLoggin: boolean}) {}
}

export class LogoutAuth implements Action {
    readonly type = AuthActionTypes.LogoautAuth;
    constructor(public payload: { isLoggin: boolean}) {}
}


export class LoginUser implements Action {
    readonly type = AuthActionTypes.LoginUser;
    constructor(public payload: { user: IUser}) {}
}

export class LoggedUser implements Action {
    readonly type = AuthActionTypes.LoggedUser;
    constructor(public payload: any) {}
}

export class LoggedUserError implements Action {
    readonly type = AuthActionTypes.LoginUserError;
    constructor(public payload: {error: string }) {}
}

export type actions = LoggedIn | LogoutAuth | LoginUser | LoggedUser | LoggedUserError;
