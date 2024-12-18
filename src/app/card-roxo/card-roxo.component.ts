import { Component, OnInit } from '@angular/core';

interface IPlano {
  infos: IInfos;
}

interface IInfos {
  tipo: string;
  preco: number;
}

@Component({
  selector: 'app-card-roxo',
  templateUrl: './card-roxo.component.html',
  styleUrls: ['./card-roxo.component.scss']
})
export class CardRoxoComponent implements OnInit {
 
  //@ts-ignore
  plano: IPlano = {
    infos: {
      tipo: 'Simples',
      preco: 200,
    },
  };

  constructor() { }

  ngOnInit(): void {
  }

}
