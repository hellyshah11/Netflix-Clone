import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./netflix/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./netflix/home/home.component').then((m) => m.HomeComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
