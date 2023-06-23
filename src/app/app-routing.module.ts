import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValveDataSheetComponent } from './valve-data-sheet/valve-data-sheet.component';
import { ProcessDataComponent } from './process-data/process-data.component';
import { SaturatedSteamPropertiesComponent } from './saturated-steam-properties/saturated-steam-properties.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'redutora', component: ProcessDataComponent },
  { path: 'saturated', component: SaturatedSteamPropertiesComponent },
  { path: 'datasheet', component: ValveDataSheetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
