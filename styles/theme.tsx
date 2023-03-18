export const theme = ({ expanded, isHovered, main }:{expanded:Boolean, isHovered:Boolean, main:any}) => (
  {
    light: {
      foreground: '#000000',
      background: '#eeeeee',
    },
    dark: {
      foreground: '#ffffff',
      background: '#222222',
    },
    transitions: {


      // card_container: {
      //   top: expanded ? '5%' : '30%', 
      //   height: expanded ? '100%' : '50%', 
      //   transition: 'top 1s ease-in-out, height 1s ease-in-out, border-width 1s ease-in-out', 
      //   width: '90%', 
      //   border: expanded ? '2px solid white' : (isHovered ? `10px solid white` : `10px solid black`),
      //   justifyContent: 'center', 
      // }
    }
  }
)