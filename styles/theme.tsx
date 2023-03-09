export const theme = ({ expanded, isHovered, main }:{expanded:Boolean, isHovered:Boolean, main:any}) => ({
    light: {
      foreground: '#000000',
      background: '#eeeeee',
    },
    dark: {
      foreground: '#ffffff',
      background: '#222222',
    },
    transitions: {
      card_container: {
        top: expanded ? '5%' : '30%', 
        height: expanded ? '100%' : '50%', 
        transition: 'top 1s ease-in-out, height 1s ease-in-out, border-width 1s ease-in-out', 
        width: '90%', 
        border: expanded ? '2px solid white' : (isHovered ? `10px solid white` : `10px solid black`),
        justifyContent: 'center', 
       
      }
    }, 
    pages: {
      home: {
        context: [
          
        ]
      },
      about: {
        context: [
          
        ]
      },
      booking: {
        context: [
          
        ]
      },
      rooms: {
        card_container: {
          top: expanded ? '5%' : '30%',
          height: expanded ? '100%' : '100%',
          transition: 'top 1s ease-in-out, height 1s ease-in-out, border-width 1s ease-in-out',
          width: expanded ? '100%' : '',
          justifyContent: 'center',
          backdropFilter: 'blur(10px)',
          backgroundColor: isHovered ? 'rgba(0, 0, 0, 0.6)':'transparent',
          transition: 'background-color .5s ease-in-out, width .5s ease-in-out, height .5s ease-in-out, border-width .5s ease-in-out, backdrop-filter .5s ease-in-out',
          backgroundImage: isHovered ? `url(${main.data[0].attributes.formats.large.url})` : `none`,
          backgroundColor: isHovered ? 'transparent' : 'white',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        },
        room_container: { 
          
        }
      },
      contact: { 
        context: [
          
        ]
      }
    }
  })