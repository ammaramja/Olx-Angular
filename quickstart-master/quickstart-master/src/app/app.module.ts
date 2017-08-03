import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';

import {NavBarComponent} from './components/nav-bar-component/nav-bar';
import {HomeComponent} from './components/HomeComponent/HomeComponent';
import {PostAdComponent} from './components/PostAdComponent/PostAdComponent';
import {DisplayUserComponent} from './components/display-user-component/display-user';
import {SearchByCategoryComponent} from './components/SearchByCategory/SearchByCategory';
import { HttpModule } from '@angular/http';

//import {FooterComponent} from './components/footer-component/footer';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule,
  RouterModule.forRoot([
{path: '', component: HomeComponent},
{path: 'postAd', component: PostAdComponent},
{path:'displayUser',component:DisplayUserComponent},
{path:'searchByCat/:category',component: SearchByCategoryComponent},
])

   ],
  declarations: [ AppComponent,NavBarComponent,HomeComponent,PostAdComponent,DisplayUserComponent,SearchByCategoryComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
