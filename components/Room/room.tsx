import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image'
import styles from './index.module.css';
import { RoomEntity , Media } from '../../types';
import { RoomCard } from '..'
import { useHover } from '../../hooks/useHover/useHover';
import { useApp } from '../../hooks'

import { v4 as uuidv4 } from 'uuid';

import 'bear-react-carousel/dist/index.css';

const Room:React.FC<RoomEntity> = ( room ) => {
  const [ hoverRef, isHovered ] = useHover()
  const { rooms, handleSetActiveRoom } = useApp();
  useEffect(() => {
    handleSetActiveRoom(room.attributes.title)
  },[isHovered])

  if (!room) {
    return <div key={uuidv4()}>Loading...</div>;
  }

  return (
    <div ref={hoverRef} className={styles.container}>
      <RoomCard {...room.attributes} active={rooms[room.attributes.title].active} />
    </div>
  )
}

export default Room
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import Slider from "react-slick";
// import BearCarousel, {TBearSlideItemDataList, BearSlideItem} from 'bear-react-carousel';

// const children = (img) => {
//   return (
//     <BearSlideItem imageUrl={img.attributes.formats['large'].url} className={styles.slide}/ >
//   )
// }

// const bearSlideItemData: TBearSlideItemDataList = room.attributes.media.data.map(img => {
//   return {
//       key: uuidv4(),
//       children: children(img)
//   };
// });
// <BearCarousel 
//         isEnableLoop
//         isEnablePagination
//         aspectRatio={{ widthRatio: 16, heightRatio: 9 }}
//         data={bearSlideItemData}
//         style={{ position: 'absolute', height: '100%' }}
//       />
