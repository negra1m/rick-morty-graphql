import { gql } from 'apollo-angular';

export const requests = {
  GET_CHARACTERS:
    gql`
      {
        characters(page: 1) {
          info {
            count
          }
          results {
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
  GET_LOCATIONS: gql`
      {
        characters(page: 1, filter: { name: "" }) {
          info {
            count
          }
          results {
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
    `
}
