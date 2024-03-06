import { Component, Input, OnInit } from '@angular/core';
import { CardData } from 'src/app/models/card-data.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() cardData!: CardData;

  getEnumStatus(status: string): string {
    switch(status) {
      case 'ALIVE':
        return 'Personagem vivo'
      case 'unknown':
      default:
        return 'Status desconhecido'
      case 'Dead':
        return 'Personagem morreu x.x'
    }
  }

}
