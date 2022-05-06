import { Component, Input, OnInit } from '@angular/core';
import { CardData } from 'src/app/models/card-data.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() cardData!: CardData;

  constructor() { }

  ngOnInit(): void {
  }

}
