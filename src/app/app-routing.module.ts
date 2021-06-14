import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DnsqueriesComponent } from './dnsqueries/dnsqueries.component';
import { LoginsComponent } from './logins/logins.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'logins',
    pathMatch: 'full'
  },
  {
    path: 'logins',
    component: LoginsComponent
  },
  {
    path: 'dns',
    component: DnsqueriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
