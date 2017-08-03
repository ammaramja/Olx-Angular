import { Component } from '@angular/core';
import {SearchAdService} from '../../Services/searchAd/searchAd';
@Component({
  selector: 'Home-Component',
  templateUrl: `./home.html`,
  providers:[SearchAdService],
})
export class HomeComponent  {

  searchedAds:Array<any>;

  constructor(private mySearchService : SearchAdService)
  {
    
    mySearchService.SearchAds().subscribe((data)=>
    {
      this.searchedAds = data.data.advertiseList;
      //console.log(this.searchedAds[0]);
      this.searchedAds = this.searchedAds.slice(0,5);
    });
    
  }
 }
