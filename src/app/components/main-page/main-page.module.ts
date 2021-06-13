import { NgModule } from '@angular/core';
import { MainPageComponentsModule } from './components/components.module';
import { MainPageRoutingModule } from './main-page.routing.module';

@NgModule({
  imports: [MainPageRoutingModule, MainPageComponentsModule],
})
export class MainPageModule {}
