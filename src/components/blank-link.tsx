import { cn } from '@/lib/utils';
import { AnchorHTMLAttributes } from 'react';

export function BlankLink({ className, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
    return <a target='_blank' rel='noopener noreferrer' className={cn(className)} {...props} />;
}
