import { Action } from '@ngrx/store';


import { DataAction, DataErrorAction } from './data.actions';
import {DataServiceError} from "../services";
import {IMovie} from "../../model/movie";
import {IUser} from "../../model/user";

export const LOGIN = '[Auth] LOGIN_USER';
export const LOGIN_ERROR = '[Auth] LOGIN_USER_ERROR';
export const LOGIN_SUCCESS = '[Auth] LOGIN_USER_SUCCESS';
export const LOGOUT = '[Auth] USER_LOGOUT'
export const LOGIN_LOADING = '[Auth] USER_LOADING';

export class AuthAction implements DataAction<IUser> {
    readonly type = LOGIN;
    constructor(public readonly payload: IUser) {}
}

export abstract class AuthErrorAction implements DataErrorAction<IUser> {
    readonly type: string;
    constructor(public readonly payload: DataServiceError<IUser>) {}
}


// export AuthLogin
