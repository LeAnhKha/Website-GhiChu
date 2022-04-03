import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/layout/admin/admin.component';
import { MainComponent } from './admin/pages/main/main/main.component';
import { AddComponent } from './admin/pages/main/main/add/add/add.component';
import { EditComponent } from './admin/pages/main/main/edit/edit/edit.component';
import { DeleteComponent } from './admin/pages/main/main/delete/delete/delete.component';

const routes: Routes = [
  {
    redirectTo: 'admin',
    path: '',
    pathMatch : 'full'
  },
  {
    component:AdminComponent,
    path: 'admin',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'mainpage'
      },
      {
        component:MainComponent,
        path:'mainpage',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
