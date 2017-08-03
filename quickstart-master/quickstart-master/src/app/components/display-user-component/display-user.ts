import { Component } from '@angular/core';
import {CategoryService} from '../../Services/getCategory/getCategory';
import {DisplayUserService} from '../../Services/displayUser/displayUser';
import {UserAdService} from '../../Services/userAds/userAds';

@Component({
  selector: 'Display-User-Component',
  templateUrl: `./displayUser.html`,
  providers:[DisplayUserService,UserAdService],

})
export class DisplayUserComponent  {

    FullName:any;
    phone:any;
    email:any;
    userName : any;
    mailTo :any =  "mailto:" + this.email;

    user_ad_category :any;
    user_ad_title : any;
    user_ad_desc:any;

    temp_var : Array<any>;

    userAdsExists:boolean = false;
    
    constructor(private myDisplayService : DisplayUserService,private myUserAdService : UserAdService ){

            myDisplayService.display_user().subscribe((data) =>{
            console.log(data.data.user);
            this.phone = data.data.user.phone;
            this.email = data.data.user.email;
            this.userName = data.data.user.userName;
            this.FullName = data.data.user.firstName + " " + data.data.user.lastName;

    });

     this.myUserAdService.getUserAds().subscribe((data) =>{
            console.log(data.data.mypostList);
             this.temp_var = data.data.mypostList;
             if(this.temp_var.length > 0)
             {
               this.userAdsExists = true;
             }
            /*this.user_ad_category = temp_var.category;
            this.user_ad_title = temp_var.title;
            this.user_ad_desc = temp_var.description;*/

    });


    }
    
}   
