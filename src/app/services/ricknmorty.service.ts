import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class RicknmortyService {
  constructor(private readonly apollo: Apollo) { }

  getAllCharacters(page: number) {
    return this.apollo.query<any>({
      query: gql`
      {
        characters(page: ${page}) {
          info {
            next
            prev
            count
            pages
          }
          results {
            id
            name
            status
            origin {
              name
            }
            image
            episode {
              name
            }
          }
        }
      }
    `,
    })
  }

  getAllLocations(page: number) {
    return this.apollo.query<any>({
      query: gql`
      {
        locations(page: ${page}) {
          info {
            next
            prev
            count
            pages
          }
          results {
            id
            name
            type
            dimension
          }
        }
      }
    `
    })
  }
}



