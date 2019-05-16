import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import {AccordionModule} from 'primeng/accordion';
import {CardModule} from 'primeng/card';
import {SplitButtonModule} from 'primeng/splitbutton';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CalendarModule} from 'primeng/calendar';
import {GalleriaModule} from 'primeng/galleria';
import {CarouselModule} from 'primeng/carousel';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

import { EmployeListComponent } from './components/employe-list/employe-list.component';
import { EmployeSummaryComponent } from './components/employe-summary/employe-summary.component';
import { EditNewEmployeComponent } from './components/edit-new-employe/edit-new-employe.component';
import { EmployeDetailComponent } from './components/employe-detail/employe-detail.component';

import { EscapeGameListComponent } from './components/escape-game-list/escape-game-list.component';
import { EscapeGameSummaryComponent } from './components/escape-game-summary/escape-game-summary.component';
import { EscapeGameNewEditComponent } from './components/escape-game-new-edit/escape-game-new-edit.component';
import { EscapeGameDetailComponent } from './components/escape-game-detail/escape-game-detail.component';

import { LaserGameListComponent } from './components/laser-game-list/laser-game-list.component';
import { LaserGameSummaryComponent } from './components/laser-game-summary/laser-game-summary.component';
import { LaserGameEditNewComponent } from './components/laser-game-edit-new/laser-game-edit-new.component';
import { LaserGameDetailComponent } from './components/laser-game-detail/laser-game-detail.component';

import { BowlingListComponent } from './components/bowling-list/bowling-list.component';
import { BowlingSummaryComponent } from './components/bowling-summary/bowling-summary.component';
import { BowlingEditNewComponent } from './components/bowling-edit-new/bowling-edit-new.component';
import { BowlingDetailComponent } from './components/bowling-detail/bowling-detail.component';

import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientSummaryComponent } from './components/client-summary/client-summary.component';
import { ClientEditNewComponent } from './components/client-edit-new/client-edit-new.component';
import { ClientDetailComponent } from './components/client-detail/client-detail.component';

import { ReservationListComponent } from './components/reservation-list/reservation-list.component';
import { ReservationSummaryComponent } from './components/reservation-summary/reservation-summary.component';
import { ReservationEditNewComponent } from './components/reservation-edit-new/reservation-edit-new.component';
import { ReservationDetailComponent } from './components/reservation-detail/reservation-detail.component';


import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';

import { PageAccueilComponent } from './components/page-accueil/page-accueil.component';
import { PageQuiSommesNousComponent } from './components/page-qui-sommes-nous/page-qui-sommes-nous.component';
import { PageContactComponent } from './components/page-contact/page-contact.component';

import { PageInfosLaserGameComponent } from './components/page-infos-laser-game/page-infos-laser-game.component';
import { PageInfosEscapeGameComponent } from './components/page-infos-escape-game/page-infos-escape-game.component';
import { PageInfosBowlingComponent } from './components/page-infos-bowling/page-infos-bowling.component';
import { ConfirmationReservationComponent } from './components/confirmation-reservation/confirmation-reservation.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,

    EmployeListComponent,
    EmployeSummaryComponent,
    EditNewEmployeComponent,
    EmployeDetailComponent,

    EscapeGameListComponent,
    EscapeGameSummaryComponent,
    EscapeGameNewEditComponent,
    EscapeGameDetailComponent,

    LaserGameListComponent,
    LaserGameSummaryComponent,
    LaserGameEditNewComponent,
    LaserGameDetailComponent,

    BowlingListComponent,
    BowlingSummaryComponent,
    BowlingEditNewComponent,
    BowlingDetailComponent,

    ClientListComponent,
    ClientSummaryComponent,
    ClientEditNewComponent,
    ClientDetailComponent,

    ReservationListComponent,
    ReservationSummaryComponent,
    ReservationEditNewComponent,
    ReservationDetailComponent,

    PageInfosLaserGameComponent,
    PageInfosEscapeGameComponent,
    PageInfosBowlingComponent,

    PageContactComponent,
    PageAccueilComponent,
    PageQuiSommesNousComponent,
    ConfirmationReservationComponent,

  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    AccordionModule,
    CardModule,
    SplitButtonModule,
    InputTextareaModule,
    CalendarModule,
    GalleriaModule,
    CarouselModule,
    ProgressSpinnerModule,

    RouterModule.forRoot([
      { path: 'editNewEmploye', component: EditNewEmployeComponent },
      { path: 'employe', component: EmployeListComponent },
      { path: 'editNewEmploye/:employe_id', component: EditNewEmployeComponent },
      { path: 'employe/:employe_id', component: EmployeDetailComponent },
      { path: '', redirectTo: '/employe', pathMatch: 'full'  },

      { path: 'editNewClient', component: ClientEditNewComponent },
      { path: 'client', component: ClientListComponent },
      { path: 'editNewClient/:client_id', component: ClientEditNewComponent },
      { path: 'client/:client_id', component: ClientDetailComponent },
      { path: '', redirectTo: '/client', pathMatch: 'full'  },

      { path: 'escapeGame', component: EscapeGameListComponent },
      { path: 'editNewEscapeGame', component: EscapeGameNewEditComponent },
      { path: 'editNewEscapeGame/:activite_id', component: EscapeGameNewEditComponent },
      { path: 'escapeGame/:activite_id', component: EscapeGameDetailComponent },
      { path: '', redirectTo: '/escapeGame', pathMatch: 'full'  },

      { path: 'laserGame', component: LaserGameListComponent },
      { path: 'editNewLaserGame', component: LaserGameEditNewComponent },
      { path: 'editNewLaserGame/:activite_id', component: LaserGameEditNewComponent },
      { path: 'laserGame/:activite_id', component: LaserGameDetailComponent },
      { path: '', redirectTo: '/laserGame', pathMatch: 'full'  },

      { path: 'bowling', component: BowlingListComponent },
      { path: 'editNewBowling', component: BowlingEditNewComponent },
      { path: 'editNewBowling/:activite_id', component: BowlingEditNewComponent },
      { path: 'bowling/:activite_id', component: BowlingDetailComponent },
      { path: '', redirectTo: '/bowling', pathMatch: 'full'  },

      { path: 'editNewReservation', component: ReservationEditNewComponent },
      { path: 'reservation', component: ReservationListComponent },
      { path: 'editNewReservation/:reservation_id', component: ReservationEditNewComponent },
      { path: 'reservation/:reservation_id', component: ReservationDetailComponent },
      { path: '', redirectTo: '/reservation', pathMatch: 'full'  },

      { path: 'pageinfoslasergame', component: PageInfosLaserGameComponent },
      { path: 'pageinfosescapegame', component: PageInfosEscapeGameComponent },
      { path: 'pageinfosbowling', component: PageInfosBowlingComponent },

      { path: 'pageaccueil', component: PageAccueilComponent },
      { path: 'quisommesnous', component: PageQuiSommesNousComponent },
      { path: 'pagecontact', component: PageContactComponent },
      { path: 'confirmation', component: ConfirmationReservationComponent},
    ])
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
