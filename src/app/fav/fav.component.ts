import { Component } from '@angular/core';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent {
  matieres = ['Mathématiques', 'Physique', 'Informatique', 'Chimie'];
  langues = ['Anglais (B1)', 'Français (C2)', 'Espagnol (A2)'];
  interets = ['Ingénierie', 'Médecine', 'Art'];
  competences = ['Communication', 'Travail d\'équipe', 'Résolution de problèmes'];

  selectedMatieres: string[] = [];
  selectedLangues: string[] = [];
  selectedInterets: string[] = [];
  selectedCompetences: string[] = [];

  objectif: string = '';

  addChoice(type: string, event: any) {
    const value = event.target.value;

    switch (type) {
      case 'matieres':
        if (!this.selectedMatieres.includes(value)) {
          this.selectedMatieres.push(value);
        }
        break;
      case 'langues':
        if (!this.selectedLangues.includes(value)) {
          this.selectedLangues.push(value);
        }
        break;
      case 'interets':
        if (!this.selectedInterets.includes(value)) {
          this.selectedInterets.push(value);
        }
        break;
      case 'competences':
        if (!this.selectedCompetences.includes(value)) {
          this.selectedCompetences.push(value);
        }
        break;
    }
  }

  removeChoice(type: string, value: string) {
    switch (type) {
      case 'matieres':
        this.selectedMatieres = this.selectedMatieres.filter(item => item !== value);
        break;
      case 'langues':
        this.selectedLangues = this.selectedLangues.filter(item => item !== value);
        break;
      case 'interets':
        this.selectedInterets = this.selectedInterets.filter(item => item !== value);
        break;
      case 'competences':
        this.selectedCompetences = this.selectedCompetences.filter(item => item !== value);
        break;
    }
  }

  setObjectif(event: any) {
    this.objectif = event.target.value;
  }

  removeObjectif() {
    this.objectif = '';
  }
}
