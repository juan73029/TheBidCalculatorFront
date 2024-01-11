import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'Dashboard',
    children: [
      {
        path: 'Calculate',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: '**', redirectTo: 'Dashboard/Calculate'
      }
    ]
  },
  {
    path: '**', redirectTo: 'Dashboard/Calculate'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
