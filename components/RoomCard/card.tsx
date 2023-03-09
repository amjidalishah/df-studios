import { useEffect, useState, useRef, useCallback, useMemo } from 'react';
import { useApp } from '../../hooks';
import { theme } from '../../src/styles/theme';
import { Product } from '../../types';
import Image from 'next/image'
import { styled as s } from '@mui/material/styles';
import styles from './index.module.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTransition, animated } from 'react-spring';
import { wrapGrid } from 'animate-css-grid'
import { 
    Card as MUICard, 
    CardActions, 
    CardActionArea, 
    CardContent, 
    Collapse, 
    IconButton, 
    IconButtonProps, 
    Slide, 
    Typography
} from '@mui/material';
import { Transition } from 'react-transition-group';
import styled from 'styled-components';
export const RoomCard = ( { title, description, products, main }: { title:any, description:any, products:any }) => {
    const [ expanded, setExpanded ] = useState(false);
    const transitionRef = useRef<HTMLDivElement>(null);
    const duration = 500;
    const [ displayInfo, setDisplayInfo ] = useState(false)
    const { rooms } = useApp();

    let active = rooms[title].active;
    const handleExpandClick = useCallback(() => {
        if(expanded){
            setDisplayInfo(!displayInfo);
            setTimeout(() => {
                setExpanded(!expanded);
            }, 500);
            
        }else {
            setExpanded(!expanded);
        }
    },[ expanded, displayInfo ]);
   
    const displayInfoCallback = useCallback(()=>{
        setTimeout(() => {
            setDisplayInfo(true)
        }, 500);
    },[])

    const removeInfoCallback = useCallback(()=>{
        setDisplayInfo(false)
    },[])
    const words = [ title, 'Room' ];
    const titleTransition = useTransition(words, {
        from: { opacity: 0, transform: 'translate3d(-25%,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(25%,0,0)' },
        trail: 200, // Delay between each item animation
    });

    const slides = [
        {
            key: 'slide1',
            direction: 'left',
            timeout: { enter: 500 },
            delay: 0,
            children: (
                <CardContent >
                    <Typography paragraph style={{color:'white'}}>
                    {
                        description
                    }
                    </Typography>
                </CardContent>
            )
        },
        {
            key: 'slide2',
            direction: 'left',
            timeout: { enter: 500 },
            delay: 300,
            children: (
                <CardContent >
                    <div className={styles.products}>
                    {
                        products ? products.data.map((product:Product) => {
                            return(
                                <div key={product.id} >
                                    <div className={styles.product__image}>
                                        <Image src={product.attributes.media.data[0].attributes.formats.thumbnail.url} width={100} height={100} />
                                    </div>
                                    <div className={styles.product__info}>
                                        <div>
                                        
                                        </div>
                                        <div className={styles.product__price}>
                                
                                        </div>
                                    </div>  
                                </div>
                            )

                        }) : <div>Loading</div>
                    }
                    </div>
                </CardContent>
            )
        }
    ]
    const slideTransition = useTransition(slides, {
        from: { transform: 'translateX(-100%)', opacity: 0 },
        enter: { transform: 'translateX(0%)', opacity: 1 },
        reverse: true,
        // leave: { transform: 'translateX(100%)', opacity: 0 },
        config: { tension: 220, friction: 30 },
        trail: 200,
    });

    const [ slide, setSlide ] = useState(false);
    useEffect(() => {
        let timeoutId: number;
      
        if (expanded) {
          timeoutId = setTimeout(() => {
            setSlide(true);
          }, 1000);
        } else {
            setSlide(false);
        }
      
        return () => clearTimeout(timeoutId);
      }, [expanded]);
    useEffect(() => {
        if(!active && expanded){
            setExpanded(false)
        }
    },[active])


      const containerStyles = useMemo(
        () =>
          theme({ expanded, isHovered: active, main }).pages.rooms.card_container,
        [expanded, active]
      );
      

      const GradientDiv = styled.div`
  --angle: 0deg;
  border: ${props => props.expanded ? '2px solid white' : '10px solid white'};
  border-image: 'conic-gradient(from var(--angle), 
    rgba(245, 229, 172, 1), rgba(192, 185, 125, 1), 
    rgba(245, 229, 172, 1)) 1';
  animation: 3s rotate linear infinite;

  @keyframes rotate {
    to {
      --angle: 360deg;
    }
  }

  transition: border 1s ease-in-out, border-width 1s ease-in-out, width .5s ease-in-out, height .5s ease-in-out, border-image 1s ease-in-out;

  @property --angle {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
  }
`;

      
    return (
        <div style={ containerStyles }>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
                <GradientDiv expanded={expanded}>
                    <Transition nodeRef={transitionRef} in={expanded} timeout={duration} onExited={removeInfoCallback} onEntered={displayInfoCallback} exit={true} >
                        <div ref={transitionRef} disableSpacing style={{ height: '100%', position: 'relative',  width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <div className={styles.room_title}>
                                <div
                                    // className={`${styles.grid} ${expanded ? styles.expanded : styles.not_expanded}`}
                                    style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        gap: '-100px',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: expanded ? '7.5em' : '',
                                        transition: 'height 0.5s ease-in-out',
                                        // transitionDelay: '1s'
                                    }}
                                >
                                    { titleTransition((style, item) =>
                                        item ? (
                                            <animated.div className="item" style={style}>
                                            <h1 
                                                key={1}
                                                className={styles.grid_item}
                                                style={{
                                                    padding: expanded ? '20px' : '0px',
                                                    display: expanded ? '' : 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    textAlign: 'center', 
                                                    width: '100%', 
                                                    margin: '0px', 
                                                    // position: 'absolute', 
                                                    top: '', 
                                                    // left: expanded ? '-25%' : '0%',
                                                    height: "auto",
                                                    fontSize: expanded ? '5vw' : "9vw",
                                                    backgroundImage: active
                                                    ? "none"
                                                    : `url(${main.data[0].attributes.formats.large.url})`,
                                                    // backgroundColor: active ? "transparent" : "rgba(21, 21, 22, 1)",
                                                    
                                                    color: active ? "white" : "transparent",
                                                    backgroundSize: active
                                                    ? "none"
                                                    :"cover",
                                                    WebkitBackgroundClip: active ? "none" : "text",
                                                    WebkitTextFillColor: active ? "white" : "transparent",
                                                    backgroundClip: active ? "none" : "text",
                                                    textFillColor: active ? "none" : "transparent",
                                                    transition: "color 0.3s ease-in-out, font-size 1s ease-in-out, left 1s ease-in-out"
                                                }}
                                                >
                                                    {item}
                                                </h1>
                                            </animated.div>
                                        ) : null
                                        )}

                                </div>
                                {
                                    slideTransition(( style, item ) => (
                                        item && slide ? (
                                            <animated.div key={item.key} style={style}>
                                            {item.children}
                                            </animated.div>
                                        ) : null
                                    ))
                                }
                            </div>
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                                style={{ 
                                    color: 'white', 
                                    position: 'absolute', 
                                    bottom: '0', 
                                    right: '0' 
                                }}
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </div>
                    </Transition>
                </GradientDiv>
            </div>
        </div>
    );
}

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = s((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(180deg)' : 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    })
}));