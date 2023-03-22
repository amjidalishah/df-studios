// "use client"
// import styles from './index.module.css';
import Bar from '@/components/Bar';
import Drawer from '@/components/Drawer'
import User from './User'
import { Suspense } from 'react';
// import './index.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

{/* @ts-expect-error Server Component */}
const Nav = async ({
  session
}: {
  session: any
}) => {
  const listItemTextStyle = {
    fontFamily: 'Passion One, cursive',
    fontSize: '24px',
    color: 'white',
    textAlign: 'center',
  };
  const nextEvent = {
    date: '2023-04-25',
  };
  const AsyncUser: JSX.Element = await User({ session: session })
  // className={styles.container}
  return (
    <div>
        <Bar/>
        <Drawer>
            <Suspense fallback={<>Loading...</>}>
            { AsyncUser }
            </Suspense>
        </Drawer>
    </div>
  );
}
export default Nav