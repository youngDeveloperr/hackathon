import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MainNavComponent } from './main-nav/main-nav.component';

@NgModule({
  declarations: [SideNavComponent, MainNavComponent],
  imports: [CommonModule],
  exports: [SideNavComponent, MainNavComponent],
})
export class SharedModule {}
