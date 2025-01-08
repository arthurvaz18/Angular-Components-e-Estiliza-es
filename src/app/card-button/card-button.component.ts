import { Component, Output, EventEmitter, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  styleUrls: ['./card-button.component.scss']
})
export class CardButtonComponent {
  propTest: boolean = false;

  @Input({transform: booleanAttribute }) buttonDisabled: boolean = false;

  @Output('buttonClickEmitterAlias') buttonClickEmitter = new EventEmitter<boolean>();

    onButtonClick() {
    console.log('onButtonClick');
    
    this.buttonClickEmitter.emit(true);
  }
}
