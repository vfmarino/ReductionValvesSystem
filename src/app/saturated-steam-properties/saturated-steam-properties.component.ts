import { Component, OnInit } from '@angular/core';
import { SaturatedSteamCalculationService } from '../service/saturatedSteamCalculation/saturated-steam-calculation.service';

@Component({
  selector: 'app-saturated-steam-properties',
  templateUrl: './saturated-steam-properties.component.html',
  styleUrls: ['./saturated-steam-properties.component.css'],
})
export class SaturatedSteamPropertiesComponent implements OnInit {
  P!: number;
  pressaoAbsoluta: number = 0;
  temperaturaC: number = 0;
  volumeLiquido: number = 0;
  volumevapor: number = 0;
  sensivel: number = 0;
  latente: number = 0;
  total: number = 0;

  constructor(
    private saturatedSteamCalculationService: SaturatedSteamCalculationService
  ) {}

  ngOnInit(): void {}

  calculate() {
    this.saturatedSteamCalculationService.pressaoAbsoluta(this.P).subscribe(
      (resultado) => {
        this.pressaoAbsoluta = resultado;
      },
      (error) => {
        alert(
          'não foi possivel calcular, houve algum erro, verifique se está usando um valor menor que 104 '
        );
      }
    );
    this.saturatedSteamCalculationService.temperatura(this.P).subscribe(
      (resultado) => {
        this.temperaturaC = resultado;
      },
      (error) => {
        alert(
          'não foi possivel calcular, houve algum erro, verifique se está usando um valor menor que 104 '
        );
      }
    );
    this.saturatedSteamCalculationService
      .volumeEspecificoLiquido(this.P)
      .subscribe(
        (resultado) => {
          this.volumeLiquido = resultado;
        },
        (error) => {
          alert(
            'não foi possivel calcular, houve algum erro, verifique se está usando um valor menor que 104 '
          );
        }
      );
    this.saturatedSteamCalculationService
      .volumeEspecificoVapor(this.P)
      .subscribe(
        (resultado) => {
          this.volumevapor = resultado;
        },
        (error) => {
          alert(
            'não foi possivel calcular, houve algum erro, verifique se está usando um valor menor que 104 '
          );
        }
      );
    this.saturatedSteamCalculationService.calorSensivel(this.P).subscribe(
      (resultado) => {
        this.sensivel = resultado;
      },
      (error) => {
        alert(
          'não foi possivel calcular, houve algum erro, verifique se está usando um valor menor que 104 '
        );
      }
    );
    this.saturatedSteamCalculationService.calorLatente(this.P).subscribe(
      (resultado) => {
        this.latente = resultado;
      },
      (error) => {
        alert(
          'não foi possivel calcular, houve algum erro, verifique se está usando um valor menor que 104 '
        );
      }
    );
    this.total = this.sensivel + this.latente;
  }
}
