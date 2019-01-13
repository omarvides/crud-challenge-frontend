import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component'
import { AccountDetailComponent } from './account-detail/account-detail.component'
import { AccountAddComponent } from './account-add/account-add.component'
import { AccountEditComponent } from './account-edit/account-edit.component'

const routes: Routes = [
  {
    path: 'account',
    component: AccountsComponent,
    data: { title: 'List of Accounts' }
  },
  {
    path: 'account-details/:id',
    component: AccountDetailComponent,
    data: { title: 'Account Details' }
  },
  {
    path: 'account-add',
    component: AccountAddComponent,
    data: { title: 'Add Account' }
  },
  {
    path: 'account-edit/:id',
    component: AccountEditComponent,
    data: { title: 'Edit Account' }
  },
  { path: '',
    redirectTo: '/account',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
