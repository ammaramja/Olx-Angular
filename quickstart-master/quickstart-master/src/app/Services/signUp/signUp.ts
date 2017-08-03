import { Injectable } from '@angular/core';
import {Response,Http,RequestOptions,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class SignUpService {

    RegisterObj:Object;

    url:any = "http://192.168.3.144:9000/register";
    
    constructor(private _http:Http )
    {

    }

    signUp(fname:any,lname:any,uname:any,pwd:any,mail:any,phone:any) {

        this.RegisterObj = {
            "firstName": fname,
            "lastName": lname,
            "userName": uname,
            "password": pwd,
            "email": mail,
            "phone": phone
        };

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(this.url, JSON.stringify(this.RegisterObj), options)
            .map((response: Response) => response.json());
        
    }
}