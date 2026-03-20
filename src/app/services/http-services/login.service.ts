import { Injectable } from '@angular/core';
import { first, map, Observable } from 'rxjs';
import { LoginUser } from 'src/app/models/loginUser';
import { BaseService } from './base.service';

@Injectable()
export class LoginService extends BaseService {
  authenticate(emailAdress: string, password: string): Observable<string> {
    var lu = new LoginUser();
    lu.email = emailAdress;
    lu.password = password;

    return this.http
      .post<LoginUser>(this.apiRoot + 'auth/login', LoginUser)
      .pipe(
        map((data) => {
          return data.token;
        })
      );
  }
}
