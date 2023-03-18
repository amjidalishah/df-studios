import { gql } from '@apollo/client';
export const GET_EVENTS = gql`
  query GetEvents {
    events {
      data {
        attributes{
          uid
          starts
          ends
          user
          name
          room {
            attributes {
              title
            }
          }
        }
      }
    }
  }
`;