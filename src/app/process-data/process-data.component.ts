import { Component, OnInit } from '@angular/core';
import { TubulationSizingService } from '../service/tubulation-sizing.service';

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

  constructor(private tubulationSizingService: TubulationSizingService) {}

  ngOnInit(): void {}

  calculate() {
    this.tubulationSizingService.Q = 500; // Atribua o valor desejado para Q
    this.tubulationSizingService.P = 0.2189; // Atribua o valor desejado para P
    this.tubulationSizingService.v = 27.5; // Atribua o valor desejado para v

    this.tubulationSizingService.tubulationSizing();
  }
}
