import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValveDataSheetComponent } from './valve-data-sheet/valve-data-sheet.component';
import { ProcessDataComponent } from './process-data/process-data.component';

const routes: Routes = [
  { path: '', component: ProcessDataComponent },
  { path: 'processData', component: ProcessDataComponent },
  { path: 'datasheet', component: ValveDataSheetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
