import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs';
import { requests } from '../models/request.model';

@Injectable({
  providedIn: 'root'
})
export class RicknmortyService {
  constructor(private readonly apollo: Apollo) { }

  getAllCharacters() {
    return this.apollo.query<any>({
      query: requests.GET_CHARACTERS
    })
  }
}



