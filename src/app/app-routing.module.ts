import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { JoinComponent } from './join/join.component';
import { PartnersComponent } from './partners/partners.component';


const routes: Routes = [
{path:'', redirectTo:'home',pathMatch:'full'},
{path: 'home', component: HomeComponent},
{path: 'about', component: AboutComponent},
{path: 'join', component: JoinComponent},
{path: 'partners', component: PartnersComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }