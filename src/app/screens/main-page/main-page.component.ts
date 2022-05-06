import { RicknmortyService } from './../../services/ricknmorty.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit, OnDestroy {
  sub: any;
  charList:any;

  constructor(private readonly ricknmortyService: RicknmortyService) {}

  ngOnInit(): void {
    this.sub = this.ricknmortyService.getAllCharacters().subscribe((res) => {
      this.charList = res.data.characters.results;
      console.log(this.charList);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
