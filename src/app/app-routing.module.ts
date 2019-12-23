import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SwapiListComponent } from './pages/swapi-list/swapi-list.component';

const routes: Routes = [{ path: '', component: SwapiListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
