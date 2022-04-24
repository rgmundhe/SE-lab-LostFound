import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FoundItemComponent } from './found-item/found-item.component';
import { LoginComponent } from './login/login.component';
import { LostItemComponent } from './lost-item/lost-item.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ResponsesComponent } from './responses/responses.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [{
  path: '',
  redirectTo:'login',
  pathMatch:'full'
},
{
  path: 'signup',
  component:SignupComponent
},
{
  path: 'login',
  component:LoginComponent
},
{
  path: 'found-item',
  component: FoundItemComponent 
},
{
  path: 'lost-item',
  component: LostItemComponent 
},
{
  path: 'responses',
  component: ResponsesComponent 
},
{
  path: 'about',
  component: AboutComponent 
},
{
  path: 'contact',
  component: ContactComponent 
},
{
  path: 'home',
  component: HomeComponent 
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
