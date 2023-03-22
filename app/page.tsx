import { GET_HOME } from '../utils/graphql/queries/pages'
import Head from 'next/head'
import styles from './index.module.css'
import Image from 'next/image'
// import { useQuery, gql } from '@apollo/client';
import { Media } from '../utils/types'
// import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";
import { GraphQLClient } from 'graphql-request'
import { style } from '@mui/system'
// import { gql, useQuery } from "urql";
const grafbase = new GraphQLClient(
  process.env.GRAPHQL_API_URL as string
)

interface HomeData {
  home: {
    data: {
      attributes: {
        main_img: {
          data: {
            attributes: {
              formats: {
                large: {
                  width: number;
                  height: number;
                  url: string;
                };
              }
            };
          };
        },
        header: string;
        description: string;
        button_text: string;
        navigation: {
          data: {
            rooms: string;
            booking: string;
            mixing: string;
            mastering: string;
            logo: {
              data: {
                attributes: {
                  formats: {
                    large: {
                      width: number;
                      height: number;
                      url: string;
                    };
                  }
                };
              }
            }
          }
        }
      };
    };
  };
}

type UseQueryResult<T> = {
  error: false;
  data: T;
} | {
  error: { message: any };
  data: null;
};

const useQuery = async <T = any>(query: any): Promise<UseQueryResult<T>> => {
  try {
    const data = await grafbase.request<T>(query);
    return { error: false, data: data };
  } catch (e) {
    return { error: { message: e }, data: null };
  }
};

export default async function Page(){
  // console.log(GET_ROOMS)
  // const data = await grafbase.request(GET_HOME)
  const { error, data } = await useQuery<HomeData>(GET_HOME);
  // const [{ data, fetching }] = useQuery({ query: GET_HOME });
  if (error) {
    return (
      <div>
        ERROR
      </div>
    );
  }

  if (!data) {
    return <p>Loading...</p>;
  }
  console.log("DATA", data.home.data.attributes)
  const stylesObject: { [key: string]: string } = {
    '--original-image-width': `${data.home.data.attributes.main_img.data.attributes.formats.large.width}px`,
    '--original-image-height': `${data.home.data.attributes.main_img.data.attributes.formats.large.height}px`,
  };
  return (
    <div className={ styles.container} >
      <div className={ styles.info_container }>
        <div className={ styles.info_wrapper } >
          <div style={{ display: 'flex', flexDirection: 'row', height: '100%', width: '100%' }}>
            <h1 className={ styles.header} >
            { 
              data.home.data.attributes.header 
            }
            </h1>
            <div className={ styles.description}>
            { 
              data.home.data.attributes.description 
            }
            </div>
          </div>
          
          <div className={ styles.cta_container }>
            <div className={ styles.cta_wrapper }>
              <div className={ styles.cta }>
                Learn More
              </div>
              <div className={styles.cta} >
              { 
                data.home.data.attributes.button_text 
              }
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div className={styles.image_container}>
        <div
          className={styles.image_wrapper}
          style={stylesObject}
        >
         <Image
          priority
          fill={true}
          src={data.home.data.attributes.main_img.data.attributes.formats.large.url}
          alt="Description of the image"
        />
        </div>
      </div>
    </div>
  );
}

const sessionOptions = {
  password: process.env.SECRET_COOKIE_PASSWORD,
  cookieName: "session",
  // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production' ? true : false
  },
}

