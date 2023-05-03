import { trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class ImcComponent {
  peso: number = 0;
  altura: number = 0;
  imc: number = 0;
  resu: string = '';


  calc(){
    this.imc = this.peso/ (this.altura * this.altura);

    if (this.imc   <= 18.4)
     this.resu= 'Magreza';

     if  (this.imc >= 18.5 )
     this.resu= 'Peso ideal';

     if  (this.imc >= 24.9 )
     this.resu= 'Acima do peso';

     if  (this.imc >= 29.9 )
     this.resu= 'Obesidade grau I';

     if  (this.imc >= 34.9 )
     this.resu= 'Obesidade grau II';

     if  (this.imc >= 39.9 )
     this.resu= 'Obesidade grau III';
  }
}
