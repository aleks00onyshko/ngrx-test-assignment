import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'main-page',
    loadChildren: () =>
      import('../components/main-page/main-page.module').then(
        (m) => m.MainPageModule
      ),
  },
  { path: '', pathMatch: 'full', redirectTo: '/main-page/home' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
