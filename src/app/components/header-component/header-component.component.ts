import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})

export class HeaderComponentComponent implements OnInit {

  items: MenuItem[];
  item: { label: string; icon: string; command: () => void; }[];
  itemss: { label: string; icon: string; command: () => void; }[];

  constructor(private router: Router) {}

  ngOnInit() {

    this.items = [
      {label: 'Laser game', icon: 'pi pi-eye', command: () => {
        this.router.navigateByUrl('/pageinfoslasergame');
      }},
      {label: 'Bowling', icon: 'pi pi-circle-on', command: () => {
        this.router.navigateByUrl('/pageinfosbowling');
      }},
      {label: 'Escape game', icon: 'pi pi-key', command: () => {
        this.router.navigateByUrl('/pageinfosescapegame');
      }},
    ];

    this.itemss = [
      {label: 'Créer un compte', icon: 'pi pi-user', command: () => {
        this.router.navigateByUrl('/editNewClient');
      }},
      {label: 'Réserver activité', icon: 'pi pi-shopping-cart', command: () => {
        this.router.navigateByUrl('/editNewReservation');
      }},
      ];

    this.item = [
      {label: 'Créer un employe', icon: 'pi pi-user', command: () => {
        this.router.navigateByUrl('/editNewEmploye');
      }},
      {label: 'Créer laser game', icon: 'pi pi-pencil', command: () => {
        this.router.navigateByUrl('/editNewLaserGame');
     }},
     {label: 'Créer bowling', icon: 'pi pi-pencil', command: () => {
      this.router.navigateByUrl('/editNewBowling');
     }},
     {label: 'Créer escape game', icon: 'pi pi-pencil', command: () => {
      this.router.navigateByUrl('/editNewEscapeGame');
     }},
     {label: 'Liste réservations', icon: 'pi pi-search', command: () => {
      this.router.navigateByUrl('/reservation');
      }},
    {label: 'Liste laser games', icon: 'pi pi-search', command: () => {
      this.router.navigateByUrl('/laserGame');
    }},
    {label: 'Liste escape games', icon: 'pi pi-search', command: () => {
        this.router.navigateByUrl('/escapeGame');
    }},
    {label: 'Liste bowlings', icon: 'pi pi-search', command: () => {
      this.router.navigateByUrl('/bowling');
    }},
    {label: 'Liste clients', icon: 'pi pi-search', command: () => {
      this.router.navigateByUrl('/client');
    }},
     ];
  }

  public pageaccueil(): void {
    this.router.navigateByUrl('/pageaccueil');
  }

  public quisommesnous(): void {
    this.router.navigateByUrl('/quisommesnous');
  }

  public pagecontact(): void {
    this.router.navigateByUrl('/pagecontact');
  }

  public client(): void {
    this.router.navigateByUrl('/editNewReservation');
  }

}
