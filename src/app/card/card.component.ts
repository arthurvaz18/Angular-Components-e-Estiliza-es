import { Component, OnInit } from '@angular/core';

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
  styleUrls: ['./card.component.scss']
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
