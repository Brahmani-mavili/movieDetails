import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MovieWrapperComponent } from './movie-wrapper/movie-wrapper.component';

const routes: Routes = [
  // {path:'',component:AppComponent,pathMatch:'full'},
  {path:'list' , component : MovieWrapperComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
