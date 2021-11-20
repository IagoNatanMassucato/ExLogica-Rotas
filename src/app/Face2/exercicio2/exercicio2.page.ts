import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio2',
  templateUrl: './exercicio2.page.html',
  styleUrls: ['./exercicio2.page.scss'],
})
export class Exercicio2Page {
  
  private nsc:number;
  private mensagem:string;
  private idade:number;

  private calcular() : void {

  this.idade = 2021 - this.nsc;
  if (this.idade < 16)
  this.mensagem = "Não pode votar";
  else{
  if ((this.idade >= 16) && (this.idade < 18))
  this.mensagem = "Não é obrigatório o voto";
  else{
    if (this.idade >= 18)
    this.mensagem = "Obrigatório o voto";
      }
    }
  }
}
