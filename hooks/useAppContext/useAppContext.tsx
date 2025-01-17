"use client"
import React, { useState, useContext, createContext, useRef } from 'react'
import { theme } from '../../styles/theme'
interface Navigation {
  open: boolean;
}
interface AppContextValue {
  // theme: undefined;
  // setTheme: React.Dispatch<React.SetStateAction<undefined>>;
  // rooms: {
  //   Glacier: { expanded: boolean; active: boolean };
  //   Throne: { expanded: boolean; active: boolean };
  // };
  // handleSetActiveRoom: (roomTitle: string) => void;
  // booking: (
  //   | { select: boolean }
  //   | { personal: boolean }
  //   | { payment: boolean }
  //   | { complete: boolean }
  // )[];
  // setBooking: React.Dispatch<React.SetStateAction<any>>; // Adjust the type for setBooking if needed
  navigation: Navigation | null
  setNavigation: React.Dispatch<React.SetStateAction<Navigation>> | null;
}

// Create the context
const AppContext = React.createContext<AppContextValue>({ navigation: {open: false}, setNavigation: () => {} });


const AppProvider = ({ children }) => {
  const [navigation, setNavigation] = useState({
    open: false,
  })

  // const [theme, setTheme] = useState(undefined);
  // const [ rooms, setRooms ] = useState({
  //   Glacier: {
  //     expanded: false,
  //     active: true
  //   },
  //   Throne: {
  //     expanded: false,
  //     active: false
  //   },
  // });
  // const [booking, setBooking] = useState([
  //   {
  //       select: true,
  //   },
  //   {
  //       personal: false,
  //   },
  //   {
  //       payment: false,
  //   },
  //   {
  //       complete: false,
  //   }
  // ]);

  // const lastActiveRoomTitle = useRef('Glacier')

  // const handleSetActiveRoom = (roomTitle: string) => {
  //   setRooms((prevRooms) => {
  //     const updatedRooms = { ...prevRooms };
  //     let hasActiveRoom = false;
  //     lastActiveRoomTitle.current = '';
  
  //     for (const room in updatedRooms) {
  //       if (updatedRooms[room].active) {
  //         hasActiveRoom = true;
  //         lastActiveRoomTitle.current = room;
  //       }
  //     }
  
  //     if (hasActiveRoom) {
  //       for (const room in updatedRooms) {
  //         updatedRooms[room].active = room === roomTitle;
  //       }
  //     } else {
  //       updatedRooms[lastActiveRoomTitle.current].active = true;
  //     }
  
  //     return updatedRooms;
  //   });
  // };
  
  let value = {
    navigation,
    setNavigation,
    // theme,
    // setTheme,
    // rooms,
    // handleSetActiveRoom,
    // booking,
    // setBooking
  };

  return <AppContext.Provider value={ value }>{children}</AppContext.Provider>
}
const useApp = () => useContext(AppContext)

export { AppProvider, useApp }