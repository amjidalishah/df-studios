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
            id
            attributes {
                location
                description
                button_text
                createdAt
                updatedAt
                publishedAt
                navigation {
                    id
                    rooms
                    booking
                    mixing
                    mastering
                    logo {
                        data {
                            attributes {
                                formats
                            }
                        }
                    }
                    icon {
                        data {
                            attributes {
                                formats
                            }
                        }
                    }
                }
                header
                main_img {
                    data {
                        id
                        attributes {
                            formats
                        }
                    }
                }
            }
        }
    }
  }
`;




