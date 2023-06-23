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

    const D = this.getDiameter(cv);
    const P = this.getPorcetagem(cv);
    console.log(cv, D, P);
    return of(cv, D, P);
  }

  getDiameter(cv: number) {
    if (cv <= 1.16) {
      return of('1/2"R');
    } else if (cv <= 2.4) {
      return of('3/4"R');
    } else if (cv <= 3.48) {
      return of('1/2"');
    } else if (cv <= 4.6) {
      return of('1"R');
    } else if (cv <= 6.45) {
      return of('3/4"');
    } else if (cv <= 6.5) {
      return of('1.1/4"R');
    } else if (cv <= 10.5) {
      return of('1"');
    } else if (cv <= 11.6) {
      return of('1.1/2"R');
    } else if (cv <= 14.0) {
      return of('1.1/4"');
    } else if (cv <= 18.5) {
      return of('2"R');
    } else if (cv <= 20.0) {
      return of('1.1/2"');
    } else if (cv <= 26.0) {
      return of('2.1/2"R');
    } else if (cv <= 35.0) {
      return of('2"');
    } else if (cv <= 37.0) {
      return of('3"R');
    } else if (cv <= 56.0) {
      return of('2.1/2"');
    } else if (cv <= 64.0) {
      return of('4"R');
    } else if (cv <= 74.0) {
      return of('3"');
    } else if (cv <= 115.0) {
      return of('4"');
    } else if (cv <= 260.0) {
      return of('6"');
    } else {
      return of('N/A');
    }
  }
  getPorcetagem(cv: number) {
    if (cv <= 1.16) {
      const P = (100 * cv) / 1.16;
      return of(P);
    } else if (cv <= 2.4) {
      const P = (100 * cv) / 2.4;
      return of(P);
    } else if (cv <= 3.48) {
      const P = (100 * cv) / 3.48;
      return of(P);
    } else if (cv <= 4.6) {
      const P = (100 * cv) / 4.6;
      return of(P);
    } else if (cv <= 6.45) {
      const P = (100 * cv) / 6.45;
      return of(P);
    } else if (cv <= 6.5) {
      const P = (100 * cv) / 6.5;
      return of(P);
    } else if (cv <= 10.5) {
      const P = (100 * cv) / 10.5;
      return of(P);
    } else if (cv <= 11.6) {
      const P = (100 * cv) / 11.6;
      return of(P);
    } else if (cv <= 14.0) {
      const P = (100 * cv) / 14.0;
      return of(P);
    } else if (cv <= 18.5) {
      const P = (100 * cv) / 18.5;
      return of(P);
    } else if (cv <= 20.0) {
      const P = (100 * cv) / 20.0;
      return of(P);
    } else if (cv <= 26.0) {
      const P = (100 * cv) / 26;
      return of(P);
    } else if (cv <= 35.0) {
      const P = (100 * cv) / 35;
      return of(P);
    } else if (cv <= 37.0) {
      const P = (100 * cv) / 37;
      return of(P);
    } else if (cv <= 56.0) {
      const P = (100 * cv) / 56;
      return of(P);
    } else if (cv <= 64.0) {
      const P = (100 * cv) / 64;
      return of(P);
    } else if (cv <= 74.0) {
      const P = (100 * cv) / 74;
      return of(P);
    } else if (cv <= 115.0) {
      const P = (100 * cv) / 115;
      return of(P);
    } else if (cv <= 260.0) {
      const P = (100 * cv) / 260;
      return of(P);
    } else {
      return of('N/A');
    }
  }
}
