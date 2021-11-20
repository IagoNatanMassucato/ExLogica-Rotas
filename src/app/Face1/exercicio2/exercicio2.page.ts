import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio2',
  templateUrl: './exercicio2.page.html',
  styleUrls: ['./exercicio2.page.scss'],
})
export class Exercicio2Page {

  private saldo:number;
  private credito:number;

  private calcular() : void {
    if (this.saldo < 500)
    this.credito = 0
    else if ((this.saldo > 501) && (this.saldo < 1000))
    this.credito = this.saldo * (20.0/100)
    else if ((this.saldo > 1001) && (this.saldo < 2000))
    this.credito = this.saldo * (30.0/100)
    else
    this.credito = this.saldo * (40.0/100)

  }
}
