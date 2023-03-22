import Image from 'next/image';
import Info from '@/components/Info';
import { Suspense } from 'react';
{/* @ts-expect-error Server Component */}
const User = async ({
    session
  }: {
    session: any
  }) => {
    let sess = JSON.stringify(session)
    // const AsyncInfo: JSX.Element = await Info({ session: session })
    return (
        <div>
            {
            /* {
                session.user ? (
                    <Suspense fallback={<>Loading...</>}>
                    { 
                        AsyncInfo 
                    }
                    </Suspense>
                ) : (
                    <div>
                        
                    </div> s
                )
            } */
            }
            <Info session={sess}/>
        </div>
    )
}
export default User