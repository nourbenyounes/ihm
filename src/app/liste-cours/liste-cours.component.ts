import { Component, OnInit } from '@angular/core';
import { CoursService, Cours } from '../services/cours.service';

@Component({
  selector: 'app-liste-cours',
  templateUrl: './liste-cours.component.html',
  styleUrls: ['./liste-cours.component.css'],
})
export class ListeCoursComponent implements OnInit {
  cours: Cours[] = [];
  utilisateurId = '1'; //
  progression: number = 0;

  constructor(private coursService: CoursService) {}

  ngOnInit(): void {
    this.coursService.getCours().subscribe((data) => {
      this.cours = data;
    });
  }

  /*ajouterCours(coursId: string): void {
    this.coursService.ajouterCours(this.utilisateurId, coursId).subscribe(() => {
      console.log('Cours ajouté avec succès');
    });
  }*/
    ajouterCours(coursId: string): void {
      this.coursService.ajouterCours(this.utilisateurId, coursId).subscribe({
        next: () => {
          console.log('Cours ajouté avec succès');
        },
        error: (error) => {
          if (error.message === 'Ce cours est déjà ajouté.') {
            // Open the course content in a new window
            window.open(`http://localhost:4200/cours/${coursId}`, '_blank');
          } else {
            console.error('Erreur:', error);
          }
        }
      });
    }



}
