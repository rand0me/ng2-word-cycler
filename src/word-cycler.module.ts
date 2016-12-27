import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule }                  from '@angular/common';

import { WordCyclerComponent }    from './word-cycler.component';

@NgModule({
  imports: [ CommonModule ],
  exports: [ WordCyclerComponent ],
  declarations: [ WordCyclerComponent ]
})
export class WordCyclerModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: WordCyclerModule };
  }
}
