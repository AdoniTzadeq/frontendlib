import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { LibraryComponent } from './library/library.component';
import { AdddataComponent } from './adddata/adddata.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [{path:"",component:HomeComponent},
{path:"Login",component:LoginComponent},
{path:"Signin",component:SigninComponent},
{path:"Library",component:LibraryComponent},
{path:"Adddata",component:AdddataComponent},
{path:"Footer",component:FooterComponent},
{path:"Header",component:HeaderComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
