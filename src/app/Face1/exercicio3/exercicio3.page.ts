import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio3',
  templateUrl: './exercicio3.page.html',
  styleUrls: ['./exercicio3.page.scss'],
})
export class Exercicio3Page {
  private salario:number;
  private aumento:number;
  private final:number;

  private calcular() : void {

    if
    (this.aumento <= 100)
    this.final = this.salario + (this.salario * this.aumento) / 100;

  }
}