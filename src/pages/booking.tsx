import * as React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/index.module.scss'
import { Nav, Hero } from '../components'
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const GET_ROOMS = gql`
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
        }
      }
    }
  }
`;

interface Media {
  data: Array<any>;
}
interface RoomData {
  id: string;
  attributes: {
    name: string;
    description: string;
    media: Media;
  };
}

interface RoomsData {
  rooms: {
    data: RoomData[];
  };
}

export default function Booking() {
  const { loading, error, data } = useQuery<RoomsData>(GET_ROOMS);

  if (error) return <p>Error: {error.message}</p>;

  console.log(JSON.stringify(data))

  return (
    <div>
      {loading ? <p>Loading...</p> :
        data?.rooms.data.map((room) => (
          <div key={room.id}>
            <div>{room.attributes.title}</div>
            <div>{room.attributes.description}</div>
            {
              room?.attributes.media.data.map((m)=> (
                <img src={m.attributes.formats.medium.url} alt="Image" />
                ))
            }
            
           
          </div>
        ))
      }
    </div>
  );
}
interface MediaData {
  id: string;
  attributes: {

  }
}
// [
//   {
//   "__typename":"UploadFileEntity",
//   "attributes": {
//       "__typename":"UploadFile",
//       "formats": {
//         "large": {
//           "ext":".jpg",
//           "url":"https://dakotah-ferrarri.s3.us-west-1.amazonaws.com/large_2_V5_A1544_676db5e4ed.jpg",
//           "hash":"large_2_V5_A1544_676db5e4ed",
//           "mime":"image/jpeg",
//           "name":"large_2V5A1544.jpg",
//           "path":null,"size":52.71,
//           "width":1000,"height":667
//         },
//         "small": {
//           "ext":".jpg",
//           "url":"https://dakotah-ferrarri.s3.us-west-1.amazonaws.com/small_2_V5_A1544_676db5e4ed.jpg",
//           "hash":"small_2_V5_A1544_676db5e4ed",
//           "mime":"image/jpeg",
//           "name":"small_2V5A1544.jpg",
//           "path":null,"size":19.38,
//           "width":500,
//           "height":333
//         },
//         "medium": {
//           "ext":".jpg",
//           "url":"https://dakotah-ferrarri.s3.us-west-1.amazonaws.com/medium_2_V5_A1544_676db5e4ed.jpg",
//           "hash":"medium_2_V5_A1544_676db5e4ed",
//           "mime":"image/jpeg","name":"medium_2V5A1544.jpg",
//           "path":null,"size":34.55,
//           "width":750,
//           "height":500
//         },
//         "thumbnail": {
//           "ext":".jpg",
//           "url":"https://dakotah-ferrarri.s3.us-west-1.amazonaws.com/thumbnail_2_V5_A1544_676db5e4ed.jpg",
//           "hash":"thumbnail_2_V5_A1544_676db5e4ed",
//           "mime":"image/jpeg","name":"thumbnail_2V5A1544.jpg",
//           "path":null,
//           "size":6.71,
//           "width":234,
//           "height":156
//         }
//       }
//     }
//   }]