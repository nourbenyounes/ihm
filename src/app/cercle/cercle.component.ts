import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cercle',
  templateUrl: './cercle.component.html',
  styleUrls: ['./cercle.component.css']
})
export class CercleComponent implements OnInit {
  @Input() size: number = 20; // Taille du cercle (en pixels)
  @Input() color: string = '#FF6F61'; // Couleur du cercle
  @Input() positionX: number = 50; // Position X (en pourcentage)
  @Input() positionY: number = 50; // Position Y (en pourcentage)

  constructor() {}

  ngOnInit(): void {}
}
