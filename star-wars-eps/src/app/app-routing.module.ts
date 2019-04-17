import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EpisodioComponent } from './components/episodio/episodio.component';
import { EpisodiosComponent } from './components/episodios/episodios.component';

const routes: Routes = [
  { path: '', component: EpisodiosComponent},
  { path: ':id', component: EpisodioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
