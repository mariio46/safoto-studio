'use client';

import { cn } from '@/lib/utils';
import type { Route } from 'next';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkType extends LinkProps {
    href: Route | URL;
    className?: string;
    children: React.ReactNode;
}

export default function NavigationLink({ href, className, children, ...props }: NavLinkType) {
    const pathname: string = usePathname();
    const active: boolean = href === pathname;
    return (
        <Link
            href={href}
            className={cn(
                'text-sm font-semibold text-muted-foreground hover:text-foreground',
                active && 'font-medium text-foreground',
                className,
            )}
            {...props}>
            {children}
        </Link>
    );
}
