import { Injectable } from '@angular/core';
import {Response,Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class CategoryService {

    url:any = "http://192.168.3.144:9000/categories";
    constructor(private _http:Http )
    {

    }

    getCategories() {

        return this._http.get(this.url).map((myresponse : Response)=>
        myresponse.json());
        
    }
}