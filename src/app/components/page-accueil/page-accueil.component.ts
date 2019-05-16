import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Activite } from '../../model/activite';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
 selector: 'app-page-accueil',
 templateUrl: './page-accueil.component.html',
 styleUrls: ['./page-accueil.component.css']
})

export class PageAccueilComponent implements OnInit {

 items: MenuItem[];
 activites: Activite[];
 images: any[];
 item: { label: string; icon: string; command: () => void; }[];

 ngOnInit() {
   this.images = [];
   this.images.push({ source: '../assets/images/gallerie/photo1.jpg' });
   this.images.push({ source: '../assets/images/gallerie/photo2.jpg' });
   this.images.push({ source: '../assets/images/gallerie/photo3.jpg' });
   this.images.push({ source: '../assets/images/gallerie/photo4.jpg' });
   this.images.push({ source: '../assets/images/gallerie/photo5.jpg' });
   this.images.push({ source: '../assets/images/gallerie/photo6.jpg' });
   this.images.push({ source: '../assets/images/gallerie/photo7.jpg' });
   this.images.push({ source: '../assets/images/gallerie/photo8.jpg' });
   this.images.push({ source: '../assets/images/gallerie/photo9.jpg' });
 }

 constructor(private router: Router) {
   this.activites = [

     {
       id: 1, tarifNormal: 1, tarifJeune: 1, tarifEtudiant: 1, nbMax: 1, nbMin: 1,
       // tslint:disable-next-line:max-line-length
       description: 'Vous rêvez de tirer sur vos amis en toute impunité? Vous avez toujours voulu faire ressortir le sniper qui est en vous? Rejoignez-nous au coeur d\'une partie de laser game endiablée !!'
     },

     {
       id: 2, tarifNormal: 2, tarifJeune: 1, tarifEtudiant: 1, nbMax: 1, nbMin: 1,
       // tslint:disable-next-line:max-line-length
       description: 'QUILLE n\'a jamais rêvé d\'enchaîner les strikes entouré de ses proches? Qui n\'eSPARE pas voir son nom en tête de classement? Pour ne pas avoir les boules, rejoins la piste !!'
     },

     {
       id: 3, tarifNormal: 2, tarifJeune: 1, tarifEtudiant: 1, nbMax: 1, nbMin: 1,
       // tslint:disable-next-line:max-line-length
       description: 'Tu as 1 heure pour t\'échapper d\'une salle remplie de mystères en tout genre, une heure pour résoudre toutes nos énigmes, créé ton équipe de détective et viens tenter ta chance !! '
     }
   ];


 }



 activites1() {
   this.router.navigateByUrl('/pageinfoslasergame');
 }

 activites2() {
   this.router.navigateByUrl('/pageinfosbowling');

 }
 activites3() {
   this.router.navigateByUrl('/pageinfosescapegame');

 }


}
