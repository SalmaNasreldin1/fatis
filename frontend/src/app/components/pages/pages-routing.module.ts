import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
       {
        path: "",
        children: [ 
            { path: 'productspage',
            loadChildren: () => import('').then( m => m.ProductspagePageModule)}
        ]
       }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { 

}