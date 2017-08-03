import { Injectable } from '@angular/core';
import {Response,Http,RequestOptions,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class SearchAdService {

    url:any = "http://192.168.3.144:9000/posts/search";
    url2:any;

    constructor(private _http:Http )
    {
        
    }


    SearchAds()
    {
         return this._http.get(this.url).map((myresponse : Response)=>
        myresponse.json());
    }

      SearchAdsByCategory(category:any)
    {
        this.url2 = this.url + "?category=" + category;
        console.log("this.url", this.url2);
         return this._http.get(this.url2).map((myresponse : Response)=>
        myresponse.json());
    }
}