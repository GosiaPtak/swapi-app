import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SwapiListOpt1Component } from './pages/swapi-list-option1/swapi-list.component';

const routes: Routes = [{ path: '', component: SwapiListOpt1Component }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
