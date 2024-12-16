import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { CardRoxoButtonComponent } from '../card-roxo-button/card-roxo-button.component';
import { CardRoxoComponent } from '../card-roxo/card-roxo.component';
import { CardButtonComponent } from '../card-button/card-button.component';


@NgModule({
  declarations: [
    CardComponent,
    CardButtonComponent,
    CardRoxoComponent,
    CardRoxoButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    CardRoxoButtonComponent,
    CardRoxoComponent,
    CardRoxoButtonComponent
  ],
})
export class CardsModule { }
