import * as React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import styles from './index.module.css'

const ButtonLink = styled(Link)`
  text-decoration: none;
  height: 24px;
  color: black;
`
interface Props {
    link: string;
    text: string
    className?: string;
    children?: React.ReactNode;
}
const Button: React.FC<Props> = ({ className, children, link, text }) => {
    return (
        <div className={styles.container}>
            <Link href={link} className={styles.link}>
            {
                text
            }
            </Link>
        
        </div>
    );
};
// const Button = styled(Container)`
    
// `
export default Button
