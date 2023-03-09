import React, { useState, useContext, createContext, useRef } from 'react'
import { theme } from '../../styles/theme'

// Create the context
const AppContext = React.createContext();


const AppProvider = ({ children }) => {

  const [theme, setTheme] = useState(undefined);
  const [ rooms, setRooms ] = useState({
    Glacier: {
      expanded: false,
      active: true
    },
    Throne: {
      expanded: false,
      active: false
    },
  });
  const [booking, setBooking] = useState([
    {
        select: true,
    },
    {
        personal: false,
    },
    {
        payment: false,
    },
    {
        complete: false,
    }
  ]);

  const lastActiveRoomTitle = useRef('Glacier')

  const handleSetActiveRoom = (roomTitle: string) => {
    setRooms((prevRooms) => {
      const updatedRooms = { ...prevRooms };
      let hasActiveRoom = false;
      lastActiveRoomTitle.current = '';
  
      for (const room in updatedRooms) {
        if (updatedRooms[room].active) {
          hasActiveRoom = true;
          lastActiveRoomTitle.current = room;
        }
      }
  
      if (hasActiveRoom) {
        for (const room in updatedRooms) {
          updatedRooms[room].active = room === roomTitle;
        }
      } else {
        updatedRooms[lastActiveRoomTitle.current].active = true;
      }
  
      return updatedRooms;
    });
  };

  const value = {
    theme,
    setTheme,
    rooms,
    handleSetActiveRoom,
    booking,
    setBooking
  };

  return <AppContext.Provider value={ value }>{children}</AppContext.Provider>
}
const useApp = () => useContext(AppContext)

export { AppProvider, useApp }