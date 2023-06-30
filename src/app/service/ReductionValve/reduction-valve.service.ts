import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReductionValveService {
  constructor() {}

  sizingAutoOperada(p1: number, p2: number, Q: number) {
    const Pa = +p1 * 0.9807;
    const Pb = +p2 * 0.9807;
    const delta = Pa + 1 - (Pb + 1);
    let cv: number;

    if (delta < Pa / 2) {
      cv = +Q / (11.92 * Math.pow(delta * (Pa + 1 + (Pb + 1)), 0.5));
    } else {
      cv = +Q / (9.6 * (Pa + 1));
    }

    let D = this.getDiameter(cv);
    let P = this.getPorcetagem(cv);
    let Poo = this.getPorcetagem2(cv);
    let POD = this.getDiameter50(cv);
    return of([cv, D, P, Poo, POD]);
  }

  getDiameter(cv: number): string {
    if (cv <= 1.16) {
      return '1/2"R';
    } else if (cv <= 2.4) {
      return '3/4"R';
    } else if (cv <= 3.48) {
      return '1/2"';
    } else if (cv <= 4.6) {
      return '1"R';
    } else if (cv <= 6.45) {
      return '3/4"';
    } else if (cv <= 6.5) {
      return '1.1/4"R';
    } else if (cv <= 10.5) {
      return '1"';
    } else if (cv <= 11.6) {
      return '1.1/2"R';
    } else if (cv <= 14.0) {
      return '1.1/4"';
    } else if (cv <= 18.5) {
      return '2"R';
    } else if (cv <= 20.0) {
      return '1.1/2"';
    } else if (cv <= 26.0) {
      return '2.1/2"R';
    } else if (cv <= 35.0) {
      return '2"';
    } else if (cv <= 37.0) {
      return '3"R';
    } else if (cv <= 56.0) {
      return '2.1/2"';
    } else if (cv <= 64.0) {
      return '4"R';
    } else if (cv <= 74.0) {
      return '3"';
    } else if (cv <= 115.0) {
      return '4"';
    } else if (cv <= 260.0) {
      return '6"';
    } else {
      return 'N/A';
    }
  }

  getPorcetagem(cv: number): number {
    if (cv <= 1.16) {
      return (100 * cv) / 1.16;
    } else if (cv <= 2.4) {
      return (100 * cv) / 2.4;
    } else if (cv <= 3.48) {
      return (100 * cv) / 3.48;
    } else if (cv <= 4.6) {
      return (100 * cv) / 4.6;
    } else if (cv <= 6.45) {
      return (100 * cv) / 6.45;
    } else if (cv <= 6.5) {
      return (100 * cv) / 6.5;
    } else if (cv <= 10.5) {
      return (100 * cv) / 10.5;
    } else if (cv <= 11.6) {
      return (100 * cv) / 11.6;
    } else if (cv <= 14.0) {
      return (100 * cv) / 14.0;
    } else if (cv <= 18.5) {
      return (100 * cv) / 18.5;
    } else if (cv <= 20.0) {
      return (100 * cv) / 20.0;
    } else if (cv <= 26.0) {
      return (100 * cv) / 26;
    } else if (cv <= 35.0) {
      return (100 * cv) / 35;
    } else if (cv <= 37.0) {
      return (100 * cv) / 37;
    } else if (cv <= 56.0) {
      return (100 * cv) / 56;
    } else if (cv <= 64.0) {
      return (100 * cv) / 64;
    } else if (cv <= 74.0) {
      return (100 * cv) / 74;
    } else if (cv <= 115.0) {
      return (100 * cv) / 115;
    } else if (cv <= 260.0) {
      return (100 * cv) / 260;
    } else {
      return NaN;
    }
  }
  getPorcetagem2(cv: number) {
    let Po = [];
    Po[0] = ['1/2"R', (cv * 100) / 1.16];
    Po[1] = ['3/4"R', (cv * 100) / 2.4];
    Po[2] = ['1/2"', (cv * 100) / 3.48];
    Po[3] = ['1"R', (cv * 100) / 4.6];
    Po[4] = ['3/4"', (cv * 100) / 6.45];
    Po[5] = ['1.1/4"R', (cv * 100) / 6.5];
    Po[6] = ['1"', (cv * 100) / 10.5];
    Po[7] = ['1.1/2"R', (cv * 100) / 11.6];
    Po[8] = ['1.1/4"', (cv * 100) / 14];
    Po[9] = ['2"R', (cv * 100) / 18.5];
    Po[10] = ['1.1/2"', (cv * 100) / 20];
    Po[11] = ['2.1/2"R', (cv * 100) / 26];
    Po[12] = ['2"', (cv * 100) / 35];
    Po[13] = ['3"R', (cv * 100) / 37];
    Po[14] = ['2.1/2"', (cv * 100) / 56];
    Po[15] = ['4"R', (cv * 100) / 64];
    Po[16] = ['3"', (cv * 100) / 74];
    Po[17] = ['4"', (cv * 100) / 115];
    Po[18] = ['6"', (cv * 100) / 260];

    return Po;
  }
  getDiameter50(cv: number): { diameter: string; fator: number } {
    const PD = [
      ['1/2"R', (cv * 100) / 1.16],
      ['3/4"R', (cv * 100) / 2.4],
      ['1/2"', (cv * 100) / 3.48],
      ['1"R', (cv * 100) / 4.6],
      ['3/4"', (cv * 100) / 6.45],
      ['1.1/4"R', (cv * 100) / 6.5],
      ['1"', (cv * 100) / 10.5],
      ['1.1/2"R', (cv * 100) / 11.6],
      ['1.1/4"', (cv * 100) / 14],
      ['2"R', (cv * 100) / 18.5],
      ['1.1/2"', (cv * 100) / 20],
      ['2.1/2"R', (cv * 100) / 26],
      ['2"', (cv * 100) / 35],
      ['3"R', (cv * 100) / 37],
      ['2.1/2"', (cv * 100) / 56],
      ['4"R', (cv * 100) / 64],
      ['3"', (cv * 100) / 74],
      ['4"', (cv * 100) / 115],
      ['6"', (cv * 100) / 260],
    ];

    let poMaisProximo = '';
    let diferencaMinima = Infinity;
    let fator: number = 0;

    for (let i = 0; i < PD.length; i++) {
      const diferenca = Math.abs(Number(PD[i][1]) - 50);

      if (diferenca < diferencaMinima) {
        diferencaMinima = diferenca;
        fator = i;
        poMaisProximo = PD[i][0].toString();
      }
    }

    return { diameter: poMaisProximo, fator: fator };
  }
}
