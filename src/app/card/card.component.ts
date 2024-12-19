import { Component, OnInit, ViewEncapsulation } from '@angular/core';

interface IPlano {
  infos: IInfos;
}

interface IInfos {
  tipo: string;
  preco: number;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  /*Na verdade este é o View Encapsulation EMULATED */
})
export class CardComponent implements OnInit {
  //@ts-ignore
  plano: IPlano = {
    infos: {
      tipo: 'Simples',
      preco: 100,
    },
  };

  constructor() { }

  ngOnInit(): void {
  }

}
