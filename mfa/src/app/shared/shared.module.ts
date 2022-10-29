import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [SideNavComponent, MainNavComponent, CardComponent],
  imports: [CommonModule],
  exports: [SideNavComponent, MainNavComponent, CardComponent],
})
export class SharedModule {}
