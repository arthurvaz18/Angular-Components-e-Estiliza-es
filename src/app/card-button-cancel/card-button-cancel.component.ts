import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-button-cancel',
  templateUrl: './card-button-cancel.component.html',
  styleUrls: ['./card-button-cancel.component.scss'],
  styles: [
    `
    .card-cancel-button {
      font-size: 16px;
      text-align: center;
      margin-top: 10px;
      border-radius: 25px;
      background-color: red;
      cursor: pointer;
      font-weight: bold;
      padding: 10px;
    }
      .card-cancel-button{
        color:#fd7557 ;
    }
    `
  ],

})
export class CardButtonCancelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
