import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentosComponent } from './modules/documentos/documentos.component';
import { DetailComponent } from './modules/documentos/detail/detail.component';

const routes: Routes = [
  {
    path: 'documentos',
    component: DocumentosComponent,
    loadChildren: () => import('./modules/documentos/documentos.module').then(m => m.DocumentosModule),

  },
  {
    path: '',
    redirectTo: '/documentos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
