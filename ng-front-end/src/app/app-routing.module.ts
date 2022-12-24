import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StageComponent } from './components/stage/stage.component';

const routes: Routes = [
  {
    path:'', redirectTo: 'home', 
    pathMatch: 'full'
  },
  {path : 'home',  component: HomeComponent},
  {path : 'stage',  component: StageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
