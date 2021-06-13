import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppSharedModule } from 'src/app/shared';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { EditPostDialogComponent } from './posts';
import { PostsComponent } from './posts/posts.component';
import { MainPageRootComponent } from './root';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';

const COMPONENTS = [
  HomeComponent,
  PostsComponent,
  GalleryComponent,
  ContactUsComponent,
  MainPageRootComponent,
  EditPostDialogComponent,
];

@NgModule({
  imports: [CommonModule, RouterModule, AppSharedModule],
  declarations: [...COMPONENTS, NavigationMenuComponent],
  entryComponents: [EditPostDialogComponent],
  exports: [...COMPONENTS],
})
export class MainPageComponentsModule {}
