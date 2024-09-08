import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth/auth.service';
import { of } from 'rxjs';
import { register, registerFail, registerSuccess } from './register.action';
import { UserRegister } from 'src/app/model/UserRegister';


@Injectable()
export class RegisterEffects {
    constructor(private actions$: Actions, private authServices: AuthService) { }

    register$ = createEffect(() =>this.actions$.pipe(
            ofType(register),
            switchMap((payload: { userRegister: UserRegister }) =>
                this.authServices.register(payload.userRegister).pipe(
                    map(() => registerSuccess()),
                    catchError((error) => of(registerFail(error)))
                )
            )
        )
    );
}
