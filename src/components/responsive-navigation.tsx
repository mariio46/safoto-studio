import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { menus } from '@/lib/data/menus';
import { cn } from '@/lib/utils';
import { NavLinkType } from '@/types';
import Link from 'next/link';
import { Icon } from './icon';
import { Button, buttonVariants } from './ui/button';
import ApplicationLogo from './application-logo';
import { BlankLink } from './blank-link';

function ResposiveNavigationLink({ className, children, href, ...props }: NavLinkType) {
    return (
        <Link
            href={href}
            className={cn('capitalize [&>svg]:mr-2 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:stroke-[1.2]', className)}
            {...props}>
            {children}
        </Link>
    );
}

export default function ResponsiveNavigation() {
    return (
        <header className='relative z-40 block sm:hidden'>
            <div className='fixed left-1/2 top-5 w-full -translate-x-1/2 px-4'>
                <nav className='flex items-center justify-between rounded-full border border-muted-foreground/20 bg-background p-2 backdrop-blur-sm'>
                    <div>
                        <ApplicationLogo className='h-7 w-28' />
                    </div>
                    <div className='flex items-center gap-x-2'>
                        <DropdownMenu>
                            <DropdownMenuTrigger className='grid place-content-center rounded-full border border-border bg-secondary p-2'>
                                <Icon name={'IconMenuDeep'} className={'h-4 w-4 stroke-[2] text-foreground'} />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                align='end'
                                className='mt-2 w-64 space-y-1 border border-muted-foreground/20'>
                                {menus.map((menu, i) => (
                                    <DropdownMenuItem key={i} asChild>
                                        <ResposiveNavigationLink href={menu.url}>
                                            <Icon name={menu.icon} className='mr-2' />
                                            {menu.name}
                                        </ResposiveNavigationLink>
                                    </DropdownMenuItem>
                                ))}
                                <DropdownMenuSeparator />
                                <DropdownMenuItem asChild>
                                    <BlankLink
                                        className={buttonVariants({
                                            variant: 'default',
                                            size: 'sm',
                                            className: 'w-full text-sm font-semibold',
                                        })}>
                                        Collab N<Icon name='IconCamera' className='mt-0.5 h-3 w-3 stroke-[1.5]' />w
                                    </BlankLink>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </nav>
            </div>
        </header>
    );
}
