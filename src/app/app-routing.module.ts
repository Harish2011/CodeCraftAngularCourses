import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { AppComponent } from './app.component';
import { PipesComponent } from './pipes/pipes.component';


const routes: Routes = [
  {
    path:'',
    component:AppComponent,
    
  },
  {
    path:'customdirectives',
    component:CustomDirectiveComponent,
  },
  {
    path:'pipes',
    component:PipesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
