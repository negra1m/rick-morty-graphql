import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  music = new Audio('../../../assets/sound/rick.mp3');

  play(){
    this.music.pause()
    this.music.play()
  }
}
