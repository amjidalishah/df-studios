import * as React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import styles from './index.module.css'

interface Props {
    link: string;
    text: string
    className?: string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
}
const Button: React.FC<Props> = ({ className, children, style, link, text }) => {
    return (
        <div className={styles.container} style={style}>
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
