import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio1',
  templateUrl: './exercicio1.page.html',
  styleUrls: ['./exercicio1.page.scss'],
})
export class Exercicio1Page {

    private horas:number;
    private vlrHr:number;
    private salario:number;
    private aumento:number;

    private calcular() : void {
    if (this.horas <= 160)
    this.salario = this.horas * this.vlrHr;
    else
    {
    if (this.horas > 160)
    {
    this.aumento = this.vlrHr + (50.0/100);
    this.salario = (this.horas * this.vlrHr) + this.aumento;
    }
    }
  }
}
