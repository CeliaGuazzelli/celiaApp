import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  lingua = 'pt-BR';
  private apiURL = 'https://api.themoviedb.org/3/';
  private key = '?api_key=53075d436e9185b82d7ba0c809c0cf0c';

  constructor(private http: HttpClient, public toastController: ToastController) { }
}
