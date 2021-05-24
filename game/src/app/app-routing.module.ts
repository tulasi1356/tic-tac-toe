import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComputergameComponent } from './computergame/computergame.component';
import { FriendgameComponent } from './friendgame/friendgame.component';
import { HomeComponent } from './home/home.component';
import { StartfriendgameComponent } from './startfriendgame/startfriendgame.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'home',component:HomeComponent},
  {path:'friends',component:FriendgameComponent},
  {path:'startgame',component:StartfriendgameComponent},
  {path:'computergame',component:ComputergameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
