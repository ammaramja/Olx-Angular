import { Component } from '@angular/core';
import {CategoryService} from '../../Services/getCategory/getCategory';
import {PostAdService} from '../../Services/postAd/postAd';

@Component({
  selector: 'PostAd-Component',
  templateUrl: `./postAd.html`,
  providers:[CategoryService,PostAdService],

})
export class PostAdComponent  {

    categories: any;

    constructor(myService: CategoryService,private myPostAdService :PostAdService) {
        myService.getCategories().subscribe((data) => {
            this.categories = data.data.itemList;
            console.log('Received categories: ', this.categories)
        });
    }

    postNewad(...arg:Array<any>)
    {
        let arr = [...arg];
        //console.log(arr);
        this.myPostAdService.postNewAd(arr[0],arr[1],arr[2],arr[3]).subscribe((data)=>
        {
            console.log(data.data);
            alert("Your Ad has been posted sucessfully!");
            

        });


    }
}   
