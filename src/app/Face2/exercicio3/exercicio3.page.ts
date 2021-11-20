import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio3',
  templateUrl: './exercicio3.page.html',
  styleUrls: ['./exercicio3.page.scss'],
})
export class Exercicio3Page {
  private nome:string;
  private vlr:number;
  private qtd:number;
  private total:number;

  private calcular() : void {
    this.total = this.vlr * this.qtd;
    if (this.qtd <= 5)
    this.total = this.total - (this.total * 2 / 100);
    else
    {
      if ((this.qtd > 5) && (this.qtd <= 10))
      this.total = this.total - (this.total * 3 / 100);
      else
      {
        if (this.qtd > 10)
        this.total = this.total - (this.total * 5 / 100);
      }
    }
  }
}
