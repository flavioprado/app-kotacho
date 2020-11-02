import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadModule } from 'src/app/upload/upload.module';
import { ProdutoListarComponent } from './produto-listar.component';

const routes: Routes = [

  {
    path: '',
    component: ProdutoListarComponent,
  }, 

 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoListarRoutingModule { }
