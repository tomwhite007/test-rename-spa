import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestGuard } from './test.guard';
import { TestResolver } from './test.resolver';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: 'test',
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsModule),
    canActivate: [TestGuard],
    resolve: {
      test: TestResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
