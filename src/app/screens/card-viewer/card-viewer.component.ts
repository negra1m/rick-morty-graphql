import { Component, OnInit, OnDestroy } from '@angular/core';
import { RicknmortyService } from './../../services/ricknmorty.service';

@Component({
  selector: 'card-viewer',
  templateUrl: './card-viewer.component.html',
  styleUrls: ['./card-viewer.component.scss']
})
export class CardViewerComponent implements OnInit, OnDestroy {
  sub: any;
  charList:any;
  locationList:any;

  constructor(private readonly ricknmortyService: RicknmortyService) { }

  ngOnInit(): void {
    this.sub = this.ricknmortyService.getAllCharacters(1).subscribe((res) => {
      this.charList = res.data.characters.results;
    });
    this.sub = this.ricknmortyService.getAllLocations(1).subscribe((res) => {
      this.locationList = res.data.locations.results;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
