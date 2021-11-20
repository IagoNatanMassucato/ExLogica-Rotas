import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-end',
  templateUrl: './back-end.page.html',
  styleUrls: ['./back-end.page.scss'],
})
export class BackEndPage {
public nomeUsuario:string = 'Mc Jalim Sk8';

public imprimir(): void {
  console.log("Skatista");
 }
}
