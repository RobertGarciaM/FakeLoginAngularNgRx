import * as AuthAction from '../Actions/auth.action';
import { AuthActionTypes } from '../Actions/auth.action';

export interface State {
    user: Array<any>;
    tokens: Array<any>;
    error: string;
    isLoading: boolean;
}

const initialState: State = {
    user: [],
    tokens: [],
    error: '',
    isLoading: false
};

export function AuthReducer(state = [], action: AuthAction.actions) {
    // console.log('Auth REDUCER', state);
    switch (action.type) {
        case AuthActionTypes.LoginUser:
            return { action, isLoading: true };
        case AuthActionTypes.LoggedUser:
            return {
                ...state,
                isLoading: false,
                token: action.payload,
                error: false
            };
        case AuthActionTypes.LoginUserError:
            return {
                ...state,
                isLoading: false,
                token: action.payload,
                error: true
            };
        default:
            return state;
    }
}

export const getAuthState = (state: State) => state.user;
export const getAuthAction = (action: any) => action.payload;
export const getAuthError = (state: State) => state.error;
export const getAuthLoading = (state: State) => state.isLoading;
