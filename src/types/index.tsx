interface UploadFile {
    attributes: {
      formats: {
        large: {
          ext: string;
          url: string;
          hash: string;
          mime: string;
          name: string;
          path: null;
          size: number;
          width: number;
          height: number;
        };
        small: {
          ext: string;
          url: string;
          hash: string;
          mime: string;
          name: string;
          path: null;
          size: number;
          width: number;
          height: number;
        };
        medium: {
          ext: string;
          url: string;
          hash: string;
          mime: string;
          name: string;
          path: null;
          size: number;
          width: number;
          height: number;
        };
        thumbnail: {
          ext: string;
          url: string;
          hash: string;
          mime: string;
          name: string;
          path: null;
          size: number;
          width: number;
          height: number;
        };
      };
    };
    __typename: string;
  }

  export interface Media {
    data: UploadFile[];
    __typename: string;
  }
  
  export interface RoomData {
    
  }
  
  export interface RoomEntity {
    attributes: {
        title: string;
        description: string;
        media: Media
        products: Product[]
        main: Media;
    };
    __typename: string;
  }
  
  interface RoomEntityResponseCollection {
      data: RoomEntity[];
      __typename: string;
  }
  
export interface RoomApiResponse {
      rooms: RoomEntityResponseCollection;
      __typename: string;
}

export interface Booking {
  id: string;
  attributes: {
    start: string;
    end: string;
    room: {
      id: string;
      attributes: {
        title: string;
      };
    };
  };
  __typename: string;
}  

export interface Product {
  id: string;
  attributes: {
    title: string;
    description: string;
    media: Media; 
  }
}