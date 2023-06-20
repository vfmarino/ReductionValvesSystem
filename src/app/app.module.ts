import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ValveDataSheetComponent } from './valve-data-sheet/valve-data-sheet.component';
import { FormsModule } from '@angular/forms';
import { SaturatedSteamPropertiesComponent } from './saturated-steam-properties/saturated-steam-properties.component';
import { HttpClientModule } from '@angular/common/http';
import { ProcessDataComponent } from './process-data/process-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProcessDataComponent,
    ValveDataSheetComponent,
    SaturatedSteamPropertiesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
