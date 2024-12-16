import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  tipo = {
    infos: {
      plano: 'Simples',
      preco: 100,
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
