import React, { useContext } from 'react'
export const AppContext = React.createContext({
  theme: undefined,
  rooms: {
    Glacier: {
        expanded: false,
        active: true
    },
    Throne: {
        expanded: false,
        active: false
    },
  },
  booking:{
    Select: {
        active: true
    },
    Personal: {
        active: false
    },
    Payment: {
        active: false
    },
    Complete: {
        active: false   
    }
  },
  setTheme: () => {},
  handleSetActiveRoom: (roomTitle: string) => {},
  setBooking: () => {},
})