import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TubulationSizingService {
  /*
  D = Diâmetro da tubulação(cm)
  Q = vazão do vapor (kg/h)
  P = Volume específico do vapor m³/Kg
  Fator de correção da Formula 0,283
  v = Velocidade recomendada (m/s)
*/

  D!: number;
  Q!: number;
  P!: number;
  v!: number;
  constructor() {}

  tubulationSizing() {
    this.D = Math.sqrt((this.Q * this.P) / (0.283 * this.v));
    console.log(this.D, this.P, this.Q, this.v);
  }
}
