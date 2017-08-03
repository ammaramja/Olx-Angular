import { Injectable } from '@angular/core';
import {Response,Http,RequestOptions,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class UserAdService {

    url:any = "http://192.168.3.144:9000/posts";
    url2:any;
    token:any;

    constructor(private _http:Http )
    {
        
    }


    getUserAds()
    {
        this.token = sessionStorage.getItem('auth-token');

        let headers = new Headers();
        headers.append('auth-token',this.token);
        let options = new RequestOptions({ headers: headers });

        return this._http.get(this.url,options).map((myresponse : Response)=>
        myresponse.json());
    }
}