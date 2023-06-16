import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}
}
