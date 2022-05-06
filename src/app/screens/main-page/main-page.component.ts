import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  template: `<ng-container>
  <div
    class="info-section"
    style="
      color: white;
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
    "
  >
    <div>
      <p>Bem-vindo!</p>
      <span
        >Aqui você pode conhecer todos os personagens de Rick n Morty, qualquer
        episódio, todos os lugares do universo para que você possa ficar
        tranquileba o tempo todo!</span
      >
    </div>
    <div class="btn-group">
      <a routerLink="/listing">Clique aqui para entrar!</a>
    </div>
  </div>
  <div class="img-section">
    <img class="glitch" src="assets/rick.webp" alt="Riick" />
    <div class="hologram"></div>
  </div>
</ng-container>`,
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {}
