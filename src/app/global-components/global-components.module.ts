import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBarComponent } from './header-bar/header-bar.component';

const components = [
  HeaderBarComponent
]

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule
  ]
})
export class GlobalComponentsModule { }
