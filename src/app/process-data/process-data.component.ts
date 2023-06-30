import { Component, OnInit } from '@angular/core';
import { ReductionValveService } from '../service/ReductionValve/reduction-valve.service';
import { Redutora } from '../models/redutora/redutora/redutora.module';

@Component({
  selector: 'app-process-data',
  templateUrl: './process-data.component.html',
  styleUrls: ['./process-data.component.css'],
})
export class ProcessDataComponent implements OnInit {
  cliente!: string;
  data!: Date;
  vendedor!: string;
  nro!: number;
  fluido!: string;
  vazao!: number;
  entrada!: number;
  saida!: number;
  material!: string;
  conexao!: string;
  redutora = new Redutora();
  porcentagens = [];
  result!: { diameter: string; fator: number };
  factor!: number;

  constructor(private reductionValve: ReductionValveService) {}

  ngOnInit(): void {}

  calculate() {
    this.reductionValve
      .sizingAutoOperada(this.entrada, this.saida, this.vazao)
      .subscribe({
        next: (resultado: any) => {
          this.redutora.capacidade = resultado[0];
          this.redutora.diametro = resultado[1];
          this.redutora.porcentagem = resultado[2];
          this.porcentagens = resultado[3];
          this.result = resultado[4];
          console.log(this.result);
        },

        error: (error) => {
          alert('Não foi possível calcular, houve algum erro.');
        },
      });
  }
}
