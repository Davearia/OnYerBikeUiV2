import { Injectable } from '@angular/core';
import { first, map, Observable } from 'rxjs';
import { loginUser } from 'src/app/models/LoginUser';
import { BaseService } from './base.service';

@Injectable()
export class LoginService extends BaseService {
  authenticate(emailAdress: string, password: string): Observable<string> {
    var lu = new loginUser();
    lu.email = emailAdress;
    lu.password = password;

    return this.http
      .post<loginUser>(this.apiRoot + 'auth/login', loginUser)
      .pipe(
        map((data) => {
          return data.token;
        })
      );
  }
}
