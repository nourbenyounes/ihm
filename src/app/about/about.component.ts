import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  userQuestion: string = '';
  result: string = '';

  // Simulated similar questions and answers
  similarQuestions = [
    {
      question: 'Quelles sont les filières les plus adaptées si je suis passionné par les sciences ?',
      answer: 'Les filières les plus adaptées incluent les sciences physiques, les sciences de la vie et de la terre, la chimie ...'
    },
    {
      question: 'Quels métiers sont accessibles après un baccalauréat économique ?',
      answer: 'Après un bac économique, les métiers accessibles incluent analyste financier, conseiller en banque, gestionnaire de patrimoine...'
    }
  ];

  // Simulated popular questions
  popularQuestions = [
    'Quels métiers sont actuellement les plus demandés en Tunisie ?',
    'Comment puis-je savoir si une filière correspond à mon profil ?'
  ];

  // Function to handle the input change
  onQuestionInput(event: any) {
    this.userQuestion = event.target.value;
  }

  // Simulated function to return a response to the user's question
  askQuestion() {
    if (this.userQuestion.toLowerCase().includes('sciences')) {
      this.result = 'Les filières les plus adaptées incluent les sciences physiques, les sciences de la vie et de la terre, la chimie...';
    } else if (this.userQuestion.toLowerCase().includes('économique')) {
      this.result = 'Après un bac économique, les métiers accessibles incluent analyste financier, conseiller en banque, gestionnaire de patrimoine...';
    } else {
      this.result = 'Désolé, nous n\'avons pas de réponse immédiate à votre question.';
    }
  }

  // Function to clear the input
  clearInput() {
    this.userQuestion = '';
    this.result = '';
  }
}
