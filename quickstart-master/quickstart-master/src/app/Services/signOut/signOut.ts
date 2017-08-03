import { Injectable } from '@angular/core';
import {Response,Http,RequestOptions,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class SignOutService {

    url:any = "http://192.168.3.144:9000/logout";
    token:any;
    
    constructor(private _http:Http )
    {

    }

    signOut() {

        this.token = sessionStorage.getItem('auth-token');

        console.log(this.url);
        
        let headers = new Headers();
        
        headers.append('auth-token',this.token);
        
        let options = new RequestOptions({ headers: headers });

        

        return this._http.delete(this.url,options);

       
    }
}