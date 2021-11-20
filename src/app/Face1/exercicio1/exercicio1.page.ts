import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio1',
  templateUrl: './exercicio1.page.html',
  styleUrls: ['./exercicio1.page.scss'],
})
export class Exercicio1Page {

  private nome:string;
  private n1:number;
  private n2:number;
  private n3:number;
  private n4:number;
  private n5:number;
  private media:number;
  private mensagem:string;
  private somar() : void {
    this.media = (this.n1 + this.n2 + this.n3 + this.n4 + this.n5) / 5;
    if (this.media > 5)
    this.mensagem = "APROVADO"
    else
    this.mensagem = "Reprovado"

  }
}

