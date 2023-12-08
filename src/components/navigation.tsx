import Link from 'next/link';
import NavigationLink from './navigation-link';
import { Button, buttonVariants } from './ui/button';
import { Separator } from './ui/separator';
import ApplicationLogo from './application-logo';
import { Icon } from './icon';
import { BlankLink } from './blank-link';

export default function Navigation() {
    return (
        <header className='relative z-10 hidden sm:block'>
            <div className='fixed left-1/2 top-10 w-full max-w-2xl -translate-x-1/2'>
                <div className='rounded-full border border-muted-foreground/50 bg-transparent px-2 py-1.5 backdrop-blur-sm'>
                    <nav className='flex items-center justify-between gap-x-5'>
                        <div className='flex items-center gap-x-2'>
                            <Link href={'/'} className='outline-none'>
                                <ApplicationLogo className='h-7 w-28' />
                            </Link>
                            <Separator
                                orientation='vertical'
                                className='mr-3 h-5 w-[0.5px] shrink-0 bg-muted-foreground'
                            />
                            <div className='flex items-center gap-x-4'>
                                <NavigationLink href={'/'}>Home</NavigationLink>
                                <NavigationLink href={'/about'}>About</NavigationLink>
                                <NavigationLink href={'/project'}>Project</NavigationLink>
                            </div>
                        </div>
                        <div>
                            <BlankLink
                                href='https://wa.me/6287844785099'
                                className={buttonVariants({
                                    variant: 'default',
                                    className: 'rounded-full font-semibold',
                                })}>
                                Collab N<Icon name='IconCamera' className='mt-0.5 h-3 w-3 stroke-[1.5]' />w
                            </BlankLink>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}
