import Link from 'next/link'
import {auth, signOut, signIn} from '@/auth';
import Image from 'next/image'
import { redirect } from 'next/dist/server/api-utils';


const Navbar = async () => {
    const session = await auth()

  return (
    <header className='px-5 py-3 bg-white shadow-sm font-work-sans'>
        <nav className='flex items-center justify-between'>
            <Link href='/' className='flex items-center'>
                <Image src='/img/logo.png' alt='Logo' width={144} height={30}/>
            </Link>

            <div className='flex items-center gap-5 text-black'>
                {session && session.user ? (
                    <>
                       <Link href="/startup/create">
                         <span>Create</span>                       
                       </Link>

                       <form action={ async () => {
                            "use server";
                        
                            await signOut({ redirectTo: '/' });
                       }}>

                            <button type='submit' className='cursor-pointer'>
                               <span>Logout</span>
                            </button> 
                       </form>

                       <Link href={`/user/${session?.user?.id}`}>
                            <span>{session?.user?.name}</span>
                       </Link>
                    </>
                ): (
                        <form action={async () => {
                            "use server";
    
                            await signIn('github');
                        }}>
                            <button type='submit' className='cursor-pointer'>
                                <span>Login</span>
                            </button>
                            
                        </form>
                    )}
            </div>
        </nav>
    </header>
  );
};

export default Navbar