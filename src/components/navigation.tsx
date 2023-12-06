import Link from 'next/link';
import ApplicationLogo from './application-logo';
import NavigationLink from './navigation-link';
import { Button } from './ui/button';
import { Separator } from './ui/separator';

export default function Navigation() {
    return (
        <header className='relative z-10 hidden sm:block'>
            <div className='fixed left-1/2 top-10 w-full max-w-2xl -translate-x-1/2'>
                <div className='rounded-full border border-muted-foreground/50 bg-white/10 px-2 py-0 backdrop-blur-lg'>
                    <nav className='flex items-center justify-between gap-x-5'>
                        <div className='flex items-center gap-x-2'>
                            <Link href={'/'} className='outline-none'>
                                <ApplicationLogo
                                    src={'/images/logo-safoto.png'}
                                    alt='Safoto Studio Logo'
                                    loading='lazy'
                                />
                            </Link>
                            <Separator
                                orientation='vertical'
                                className='mr-3 h-5 w-[0.5px] shrink-0 bg-muted-foreground'
                            />
                            <div className='flex items-center gap-x-4'>
                                <NavigationLink href={'/'}>Home</NavigationLink>
                                <NavigationLink href={'#'}>Project</NavigationLink>
                                <NavigationLink href={'#'}>Team</NavigationLink>
                            </div>
                        </div>
                        <div>
                            <Button className='rounded-full'>Collab Now</Button>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}
