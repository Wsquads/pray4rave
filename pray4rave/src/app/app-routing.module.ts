import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { BlogComponent } from './components/blog/blog.component';
import { ReleasesComponent } from './components/releases/releases.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'profile', component: ProfileComponent},
  {path:'events', component:EventosComponent},
  {path:'blog', component:BlogComponent},
  {path:'releases', component:ReleasesComponent},
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
