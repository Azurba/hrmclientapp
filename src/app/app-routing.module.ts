import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'dashboard', loadChildren:()=> import('./dash/dash.module').then(m=>m.DashModule), canActivate: [AuthGuard]},
  {path:'auth', loadChildren:()=> import('./auth/auth.module').then(m=>m.AuthModule)},
  {path:'recruiting', loadChildren:()=> import('./recruiting/recruiting.module').then(m=>m.RecruitingModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
