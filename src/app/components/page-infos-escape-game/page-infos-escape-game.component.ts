import { Component, OnInit } from '@angular/core';
import { ActEscapeGame } from '../../model/activite';
import { Router } from '@angular/router';
import { EscapeGameServiceService } from '../../services/escape-game-service.service';

@Component({
  selector: 'app-page-infos-escape-game',
  templateUrl: './page-infos-escape-game.component.html',
  styleUrls: ['./page-infos-escape-game.component.css']
})

export class PageInfosEscapeGameComponent implements OnInit {

  act: ActEscapeGame;
  acti: ActEscapeGame;
  activ: ActEscapeGame;

  constructor(private router: Router, private escapeService: EscapeGameServiceService) {}

  index = 0;

  openNext() {
      this.index = (this.index === 2) ? 0 : this.index + 1;
  }

  openPrev() {
      this.index = (this.index === 0) ? 2 : this.index - 1;
  }

  onTabOpen(e) {
    this.index = e.index;
  }

  ngOnInit() {
    this.escapeService.findActiviteById(7).subscribe(activite => this.act = activite);
    this.escapeService.findActiviteById(8).subscribe(activite => this.acti = activite);
    this.escapeService.findActiviteById(9).subscribe(activite => this.activ = activite);
  }

}
