import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class EpisodioService {

  readonly URL_API = 'http://localhost:3000/episodio/';

  personajes: [];
  personaje: string;

  constructor(private http: HttpClient) { }

  getPersonajes(claveEpisodio: string) {
    return this.http.get(this.URL_API + `${claveEpisodio}`);
  }

  postPersonaje(personaje) {
    return this.http.post(this.URL_API, personaje);
  }

  deletePersonaje(personaje) {
    return this.http.delete(this.URL_API + personaje.episodio + '/' + personaje.personaje);
  }

}
