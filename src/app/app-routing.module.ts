import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValveDataSheetComponent } from './valve-data-sheet/valve-data-sheet.component';
import { ProcessDataComponent } from './process-data/process-data.component';
import { SaturatedSteamPropertiesComponent } from './saturated-steam-properties/saturated-steam-properties.component';

const routes: Routes = [
  { path: 'home', component: SaturatedSteamPropertiesComponent },
  { path: 'processData', component: ProcessDataComponent },
  { path: 'saturated', component: SaturatedSteamPropertiesComponent },
  { path: 'datasheet', component: ValveDataSheetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
