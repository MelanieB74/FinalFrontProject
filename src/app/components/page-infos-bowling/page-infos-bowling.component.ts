import { Component, OnInit } from '@angular/core';
import { ActBowling } from '../../model/activite';
import { Router } from '@angular/router';
import { BowlingServiceService } from '../../services/bowling-service.service';

@Component({
  selector: 'app-page-infos-bowling',
  templateUrl: './page-infos-bowling.component.html',
  styleUrls: ['./page-infos-bowling.component.css']
})

export class PageInfosBowlingComponent implements OnInit {

  act: ActBowling;
  acti: ActBowling;
  activ: ActBowling;

  constructor(private router: Router, private bowlingService: BowlingServiceService) {}

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
    this.bowlingService.findActiviteById(4).subscribe(activite => this.act = activite);
    this.bowlingService.findActiviteById(5).subscribe(activite => this.acti = activite);
    this.bowlingService.findActiviteById(6).subscribe(activite => this.activ = activite);
  }

}
