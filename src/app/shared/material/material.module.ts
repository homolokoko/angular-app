import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { CommonModule } from '@angular/common';

@NgModule({

  imports: [
    CommonModule
  ],
  exports: [
    MatButtonModule,
    MatDividerModule
  ]

})

export class MaterialModule { }
