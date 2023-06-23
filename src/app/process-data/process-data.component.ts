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
  fluido!: string;
  vazao!: number;
  entrada!: number;
  saida!: number;
  material!: string;
  conexao!: string;
  redutora = new Redutora();

  constructor(private reductionValve: ReductionValveService) {}

  ngOnInit(): void {}

  calculate() {
    this.reductionValve
      .sizingAutoOperada(this.entrada, this.saida, this.vazao)
      .subscribe({
        next: (resultado: any) => {
          this.redutora.capacidade = resultado.cv;
          this.redutora.diametro = resultado.D;
          this.redutora.porcentagem = resultado.P;
        },
        error: (error) => {
          alert('Não foi possível calcular, houve algum erro.');
        },
      });
  }
}
