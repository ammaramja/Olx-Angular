import { Injectable } from '@angular/core';
import {Response,Http,RequestOptions,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class DisplayUserService {

    url:any = "http://192.168.3.144:9000/user?userId=";

    token:any;
    uname:any;
    
    constructor(private _http:Http )
    {

    }

    display_user() {

        this.token = sessionStorage.getItem('auth-token');
        this.uname = sessionStorage.getItem('userId');
        console.log(this.uname);

        this.url = this.url + this.uname;
        console.log(this.url);
        let headers = new Headers();
        headers.append('auth-token',this.token);
        headers.append('Content-Type','application/json');
        let options = new RequestOptions({ headers: headers });

         return this._http.get(this.url,options).map((myresponse : Response)=>
        myresponse.json());
        
    }
}