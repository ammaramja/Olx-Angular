import { Injectable } from '@angular/core';
import {Response,Http,RequestOptions,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class SignInService {

    SigninObj:Object;

    url:any = "http://192.168.3.144:9000/login";
    
    constructor(private _http:Http )
    {

    }

    signIn(uname:any,pwd:any,) {

        this.SigninObj = {
            "userName": uname,
            "password": pwd
        };

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(this.url, JSON.stringify(this.SigninObj), options)
            .map((response: Response) => response.json());
        
    }
}