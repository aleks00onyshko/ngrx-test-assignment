import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HomeComponent } from './components/home/home.component';
import { PostsComponent } from './components/posts/posts.component';
import { MainPageRootComponent } from './components/root';

const MainPageRoutes: Routes = [
  {
    path: 'main-page',
    component: MainPageRootComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'gallery', component: GalleryComponent },
      { path: 'posts', component: PostsComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: '**', redirectTo: '/home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(MainPageRoutes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
