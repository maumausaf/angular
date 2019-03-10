import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadosComponent } from './estados.component';
import { EstadosRoutingModule } from './estados.routing';

@NgModule({
  declarations: [EstadosComponent],
  imports: [
    CommonModule,
    EstadosRoutingModule
  ]
})
export class EstadosModule { }
