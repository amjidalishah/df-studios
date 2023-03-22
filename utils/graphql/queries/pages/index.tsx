import { gql } from '@apollo/client';
export const GET_ROOMS = gql`
  query GetRooms {
    rooms {
      data {
        attributes{
          title
          description
          media{
            data{
              attributes{
                    formats
                }
            }
          }
          products {
            data {
              attributes {
                title
                description
                media {
                  data {
                    attributes {
                      formats
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_HOME = gql`
  query GetHome {
    home {
      data {
        attributes{
          navigation {
            data {
              rooms
              booking
              mixing
              mastering
              logo {
                data {
                  attribututes {
                    formats
                  }
                }
              }
              icon {
                data {
                  attribututes {
                    formats
                  }
                }
              }
            }
          }
          main_img {
            data {
              attributes {
                formats
              }
            }
          }
          header
          location
          description
          button_text
        }
      }
    }
  }
`;




