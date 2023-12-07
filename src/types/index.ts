import type { Route } from 'next';
import type { LinkProps } from 'next/link';

export type Children = {
    children: React.ReactNode;
};

export interface NavLinkType extends LinkProps {
    href: Route | URL;
    className?: string;
    children: React.ReactNode;
}
