import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SaturatedSteamCalculationService {
  P!: number;

  constructor() {}

  pressaoAbsoluta(P: number): Observable<number> {
    const Pa = +P + 1;
    return of(Pa);
  }

  temperatura(P: number) {
    const Pa = (+P + 1) * 14.223;
    const temperaturaF =
      -0.17724 * Pa +
      3.83986 / Pa +
      11.48345 * Math.pow(Pa, 0.5) +
      31.1311 * Math.log(Pa) +
      0.00008762969 * Math.pow(Pa, 2) +
      -0.0000000278794 * Math.pow(Pa, 3) +
      86.594;
    const temperaturaC = ((temperaturaF - 32) * 5) / 9;
    return of(temperaturaC);
  }

  volumeEspecificoLiquido(P: number) {
    const Pa = (+P + 1) * 14.223;
    const volumeLiquido =
      (-0.0000005280126 * Pa +
        0.0000299461 / Pa +
        0.0001521874 * Math.pow(Pa, 0.5) +
        0.0000662512 * Math.log(Pa) +
        0.0000000008408856 * Math.pow(Pa, 2) +
        0.0000000000000186401 * Math.pow(Pa, 3) +
        0.01596) /
      16.0185;
    return of(volumeLiquido);
  }

  volumeEspecificoVapor(P: number) {
    const Pa = (+P + 1) * 14.223;
    if (1 < Pa && Pa <= 200) {
      const Va =
        -0.48799 * Pa +
        304.717614 / Pa +
        9.8299035 * Math.pow(Pa, 0.5) +
        -16.455274 * Math.log(Pa) +
        0.0009474745 * Math.pow(Pa, 2) +
        -0.000001363366 * Math.pow(Pa, 3) +
        19.53953;
      const volumevapor = Va / 16.0185;
      return of(volumevapor);
    } else if (200 < Pa && Pa <= 1500) {
      const Vb =
        0.002662 * Pa +
        457.5802 / Pa +
        -0.176959 * Math.pow(Pa, 0.5) +
        0.826862 * Math.log(Pa) +
        -0.0000004601876 * Math.pow(Pa, 2) +
        0.000000000063181 * Math.pow(Pa, 3) +
        -2.3928;
      const volumevapor = Vb / 16.0185;
      return of(volumevapor);
    } else {
      const volumevapor = 0;
      return of(volumevapor);
    }
  }

  calorSensivel(P: number) {
    const Pa = (+P + 1) * 14.223;
    const sensivelA =
      -0.15115567 * Pa +
      3.671404 / Pa +
      11.622558 * Math.pow(Pa, 0.5) +
      30.832667 * Math.log(Pa) +
      0.0000874117 * Math.pow(Pa, 2) +
      -0.0000000262306 * Math.pow(Pa, 3) +
      54.55;
    const sensivel = sensivelA / 1.7997;
    return of(sensivel);
  }
  calorLatente(P: number) {
    const Pa = (+P + 1) * 14.223;
    const latenteA =
      0.008676153 * Pa +
      -1.3049844 / Pa +
      -8.2137368 * Math.pow(Pa, 0.5) +
      -16.37649 * Math.log(Pa) +
      -0.000043043 * Math.pow(Pa, 2) +
      0.000000009763 * Math.pow(Pa, 3) +
      1045.81;
    const latente = latenteA / 1.7997;
    return of(latente);
  }
}
