import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Share } from '@capacitor/share';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  public appPages = [
    { title: 'Mi Cuenta', url: '/login', icon: 'person' },
    { title: 'Vista Docente', url: '/index2', icon: 'briefcase' },
    { title: 'Vista Alumno', url: '/folder/folder', icon: 'book' },
    { title: 'Mapa', url: '/mapa', icon: 'map' },
  ];

  nombreUsuario = localStorage.getItem('nombreUsuario');

  constructor(public router: Router, private menu: MenuController) {}

  abrirMapa() {
    this.router.navigate(["/mapa"]);
    this.menu.close();
  }

  compartirApp() {
    Share.share({
      title:'Compartir myApp',
      url: 'https://www.google.com/',
      dialogTitle:'Es Perfecta!',
    });
    this.menu.close();
  }

  cerrarSesion() {
    localStorage.removeItem('autenticado');
    this.router.navigate(["/login"]);
    this.menu.close();
  }
}
