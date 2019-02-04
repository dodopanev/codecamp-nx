import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MybuttonComponent } from './mybutton/mybutton.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MybuttonComponent],
  exports: [MybuttonComponent]
})
export class ComponentsSharedModule {}
