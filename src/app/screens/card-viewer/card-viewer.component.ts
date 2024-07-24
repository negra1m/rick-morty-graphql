import { Component, OnInit, OnDestroy } from '@angular/core';
import { RicknmortyService } from './../../services/ricknmorty.service';

@Component({
  selector: 'card-viewer',
  templateUrl: './card-viewer.component.html',
  styleUrls: ['./card-viewer.component.scss']
})
export class CardViewerComponent implements OnInit, OnDestroy {
  sub: any;
  charList: any;
  locationList:any;
  page : any;
  pageLocations = 0;

  constructor(private readonly ricknmortyService: RicknmortyService) { }

  ngOnInit(): void {
    this.getCharacters(1)
    this.getLocations(1);

  }

  changeCardPositionChar(index: number) {
    let arrayForSort = [...this.charList]
    index <= 17 ? arrayForSort.push(arrayForSort.shift()) : arrayForSort.unshift(arrayForSort?.pop())
    this.charList = arrayForSort
  }

  changeCardPositionLocation(index: number) {
    let arrayForSort = [...this.locationList]
    index <= 17 ? arrayForSort.push(arrayForSort.shift()) : arrayForSort.unshift(arrayForSort?.pop())
    this.locationList = arrayForSort
  }

  getCharacters(pageNumber: number) {
    this.ricknmortyService.getAllCharacters(pageNumber).subscribe(res => {
      this.charList = res.data.characters.results;
      this.page = res.data.characters.info;
    });
  }

  getLocations(pageNumber: number) {
    this.ricknmortyService.getAllLocations(pageNumber).subscribe(res => {
      this.locationList = res.data.locations.results;
      console.log(res);

    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
