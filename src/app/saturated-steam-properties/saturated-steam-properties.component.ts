import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saturated-steam-properties',
  templateUrl: './saturated-steam-properties.component.html',
  styleUrls: ['./saturated-steam-properties.component.css'],
})
export class SaturatedSteamPropertiesComponent implements OnInit {
  P!: number;
  Pa!: number;
  pressaoAbsoluta!: number;
  temperaturaF!: number;
  temperaturaC!: number;
  volumeLiquido!: number;
  Va!: number;
  Vb!: number;
  volumevapor!: number;
  sensivel!: number;
  sensivelA!: number;
  latente!: number;
  latenteA!: number;
  total!: number;

  constructor() {}

  ngOnInit(): void {}

  calculate() {
    console.log(this.P);
    this.Pa = (+this.P + 1) * 14.223;
    console.log(this.Pa);
    this.temperaturaF =
      -0.17724 * this.Pa +
      3.83986 / this.Pa +
      11.48345 * Math.pow(this.Pa, 0.5) +
      31.1311 * Math.log(this.Pa) +
      0.00008762969 * Math.pow(this.Pa, 2) +
      -0.0000000278794 * Math.pow(this.Pa, 3) +
      86.594;
    console.log(this.temperaturaF);
    this.temperaturaC = ((this.temperaturaF - 32) * 5) / 9;

    this.volumeLiquido =
      (-0.0000005280126 * this.Pa +
        0.0000299461 / this.Pa +
        0.0001521874 * Math.pow(this.Pa, 0.5) +
        0.0000662512 * Math.log(this.Pa) +
        0.0000000008408856 * Math.pow(this.Pa, 2) +
        0.0000000000000186401 * Math.pow(this.Pa, 3) +
        0.01596) /
      16.0185;

    if (1 < this.Pa && this.Pa <= 200) {
      this.Va =
        -0.48799 * this.Pa +
        304.717614 / this.Pa +
        9.8299035 * Math.pow(this.Pa, 0.5) +
        -16.455274 * Math.log(this.Pa) +
        0.0009474745 * Math.pow(this.Pa, 2) +
        -0.000001363366 * Math.pow(this.Pa, 3) +
        19.53953;
      this.volumevapor = this.Va / 16.0185;
    } else if (200 < this.Pa && this.Pa <= 1500) {
      this.Vb =
        0.002662 * this.Pa +
        457.5802 / this.Pa +
        -0.176959 * Math.pow(this.Pa, 0.5) +
        0.826862 * Math.log(this.Pa) +
        -0.0000004601876 * Math.pow(this.Pa, 2) +
        0.000000000063181 * Math.pow(this.Pa, 3) +
        -2.3928;
      this.volumevapor = this.Vb / 16.0185;
    } else {
      alert('não é possivel calcular para essa pressão');
    }
    this.sensivelA =
      -0.15115567 * this.Pa +
      3.671404 / this.Pa +
      11.622558 * Math.pow(this.Pa, 0.5) +
      30.832667 * Math.log(this.Pa) +
      0.0000874117 * Math.pow(this.Pa, 2) +
      -0.0000000262306 * Math.pow(this.Pa, 3) +
      54.55;
    this.sensivel = this.sensivelA / 1.7997;

    this.latenteA =
      0.008676153 * this.Pa +
      -1.3049844 / this.Pa +
      -8.2137368 * Math.pow(this.Pa, 0.5) +
      -16.37649 * Math.log(this.Pa) +
      -0.000043043 * Math.pow(this.Pa, 2) +
      0.000000009763 * Math.pow(this.Pa, 3) +
      1045.81;
    this.latente = this.latenteA / 1.7997;
    this.total = this.sensivel + this.latente;
  }
}
