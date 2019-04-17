import { Component, OnInit } from '@angular/core';
import { EpisodioService } from '../../services/episodio.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-episodio',
  templateUrl: './episodio.component.html',
  styleUrls: ['./episodio.component.css']
})
export class EpisodioComponent implements OnInit {

  claveEpisodio: string;
  personaje: any = {};

  constructor(private episodioService: EpisodioService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.claveEpisodio = this.activatedRoute.snapshot.paramMap.get('id');
    this.getPersonajes();
  }

  cargarPersonaje() {
    this.personaje.personaje = this.episodioService.personaje;
    this.personaje.episodio = this.activatedRoute.snapshot.paramMap.get('id');
    this.episodioService.postPersonaje(this.personaje).subscribe();
    this.getPersonajes();
  }

  borrarPersonaje(personaje) {
    this.personaje.personaje = personaje;
    this.personaje.episodio = this.activatedRoute.snapshot.paramMap.get('id');
    this.episodioService.deletePersonaje(this.personaje).subscribe();
    this.getPersonajes();
  }

  getPersonajes() {
    this.episodioService.getPersonajes(this.claveEpisodio).subscribe( res  => {
      this.episodioService.personajes = res as [];
    });
  }

  limpiarForm(form?: NgForm) {
    if (form) {
      form.reset();
    }
  }

}