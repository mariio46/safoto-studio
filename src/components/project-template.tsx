import { cn } from '@/lib/utils';
import * as React from 'react';

const ProjectTemplate = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
    return <div className={cn('my-10 flex flex-col gap-y-4', className)} {...props} />;
};

const Project = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div
            className={cn(
                'flex w-full max-w-5xl flex-col space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0',
                className,
            )}
            {...props}
        />
    );
};

const ProjectBLock = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
    return <div className={cn('group flex w-full', className)} {...props} />;
};

const ProjectBLockBlankLink = ({ className, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    return (
        <a
            target='_blank'
            rel='noopener noreferrer'
            className={cn(
                'flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800',
                className,
            )}
            {...props}
        />
    );
};

const ProjectBLockItem = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
    return <div className={cn('flex items-center space-x-3', className)} {...props} />;
};

const ProjectBLockItemContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
    return <div className={cn('relative h-16', className)} {...props} />;
};

const ProjectBLockItemIcon = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div
            className={cn(
                'relative -right-10 -top-6 inline-flex h-6 w-6 items-center rounded-full border border-neutral-200 bg-white p-0.5 dark:border-neutral-700',
                className,
            )}
            {...props}
        />
    );
};

const ProjectBlockItemWords = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
    return <div className={cn('flex flex-col', className)} {...props} />;
};

const ProjectBlockItemTitle = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    return <h5 className={cn('font-medium text-foreground', className)} {...props} />;
};

const ProjectBlockItemDescription = ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => {
    return <p className={cn('text-muted-foreground', className)} {...props} />;
};

const ProjectBlockRedirect = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div
            className={cn(
                'transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-45 dark:text-neutral-300',
                className,
            )}
            {...props}
        />
    );
};

export {
    Project,
    ProjectBLock,
    ProjectBLockBlankLink,
    ProjectBLockItem,
    ProjectBLockItemContent,
    ProjectBLockItemIcon,
    ProjectBlockItemDescription,
    ProjectBlockItemTitle,
    ProjectBlockItemWords,
    ProjectBlockRedirect,
    ProjectTemplate,
};
