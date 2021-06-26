import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { TemoignageComponent } from './temoignage/temoignage.component';
import { ActionsComponent } from './actions/actions.component';
import { HeaderComponent } from './header/header.component';
import { MissionComponent } from './mission/mission.component';
import { EvenementComponent } from './evenement/evenement.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminPageComponent,
    TemoignageComponent,
    ActionsComponent,
    HeaderComponent,
    MissionComponent,
    EvenementComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
