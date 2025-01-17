import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursService, Cours } from '../services/cours.service';

@Component({
  selector: 'app-cours-detail',
  templateUrl: './cours-detail.component.html',
  styleUrls: ['./cours-detail.component.css'],
})
export class CoursDetailComponent implements OnInit {
  cours: Cours | null = null;

  constructor(
    private route: ActivatedRoute,
    private coursService: CoursService
  ) {}

  ngOnInit(): void {
    const coursId = this.route.snapshot.paramMap.get('coursId');
    if (coursId) {
      this.coursService.getCoursById(coursId).subscribe((data) => {
        this.cours = data;
      });
    }
    else {(error: any) => {
      console.error('Error fetching course:', error);
    }}
  }

}
