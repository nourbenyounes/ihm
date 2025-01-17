import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

export interface Cours {
  _id: string;
  titre: string;
  description: string;
}

export interface Utilisateur {
  _id: string;
  nomUtilisateur: string;
  email: string;
  cours: Array<{
    coursId: string;
    progression: number;
  }>;
}

@Injectable({
  providedIn: 'root',
})
export class CoursService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getCours(): Observable<Cours[]> {
    return this.http.get<Cours[]>(`${this.apiUrl}/cours`);
  }

 /* ajouterCours(utilisateurId: string, coursId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/utilisateur/${utilisateurId}/cours/${coursId}`, {});
  }*/
    getCoursById(coursId: string): Observable<Cours> {

      return this.http.get<Cours>(`${this.apiUrl}/cours/${coursId}`);
    }

    ajouterCours(utilisateurId: string, coursId: string): Observable<any> {
      return this.http.post(`${this.apiUrl}/utilisateur/${utilisateurId}/cours/${coursId}`, {}, { responseType: 'json' })
        .pipe(
          catchError((error: HttpErrorResponse) => {
            if (error.status === 400) {
              // Custom handling for already-added course
              return throwError(() => new Error('Ce cours est déjà ajouté.'));
            }
            return throwError(() => error);
          })
        );
    }





}
