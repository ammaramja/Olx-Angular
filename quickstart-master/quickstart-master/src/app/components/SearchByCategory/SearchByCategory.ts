import { Component } from '@angular/core';
import {SearchAdService} from '../../Services/searchAd/searchAd';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'Search-by-category',
  templateUrl: `./searchByCategory.html`,
  providers:[SearchAdService],
})
export class SearchByCategoryComponent  {

  searchedAds:Array<any> = [];
  category:any;
  constructor(private mySearchService : SearchAdService,private activatedRoute: ActivatedRoute)
  {
       this.activatedRoute.params.subscribe((value:any)=>{

      this.category = value.category;
 
    this.ammar(this.category);
    }
    );
 
    
  }

  ammar(category: string) {
      this.mySearchService.SearchAdsByCategory(category).subscribe((data) => {
          this.searchedAds = [];
          this.searchedAds = data.data.advertiseList;
          console.log(this.searchedAds);
      });
  }
}
