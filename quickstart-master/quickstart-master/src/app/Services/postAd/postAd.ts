import { Injectable } from '@angular/core';
import {Response,Http,RequestOptions,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class PostAdService {

    url:any = "http://192.168.3.144:9000/postAd";

    PostObj:Object;

    constructor(private _http:Http )
    {

    }


    postNewAd(adTitle: any, uName: any,cat:any,adDesc:any ) {

        this.PostObj = { 
            "title": adTitle,
         "name": uName,
          "category": cat,
           "description": adDesc,
            
        }
        let token = sessionStorage.getItem('auth-token');

        let headers = new Headers();
        headers.append('auth-token',token);
        headers.append('Content-Type','application/json');
        let options = new RequestOptions({ headers: headers });

        return this._http.post(this.url, JSON.stringify(this.PostObj), options)
            .map((response: Response) => response.json());

    }
}