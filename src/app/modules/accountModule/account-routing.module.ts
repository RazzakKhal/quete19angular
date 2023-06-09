import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountHomePageComponent } from './pages/account-home-page/account-home-page.component';

const routes: Routes = [
  {path : 'home', component : AccountHomePageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
