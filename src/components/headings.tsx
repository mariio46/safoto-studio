import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'react';

export function PrimaryHeading({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
    return <h1 className={cn('text-3xl font-bold text-foreground hover:text-primary', className)} {...props} />;
}

export function SecondaryHeading({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
    return <h2 className={cn('text-xl font-bold text-foreground lg:text-2xl', className)} {...props} />;
}
