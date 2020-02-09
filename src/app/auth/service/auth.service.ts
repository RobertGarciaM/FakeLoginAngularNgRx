import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';
import { IUser } from '../../interfaces/IUser';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(user: IUser): Observable<any> {
    const toSend = {
      isLoading: false,
      error: true,
      user
    };

    // return throwError('Invalid User');

    return of (toSend).pipe(delay(5000));
  }
}
