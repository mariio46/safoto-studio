import ApplicationLogo from '@/components/application-logo';
import * as icons from '@tabler/icons-react';
import { Icon } from './icon';
import { BlankLink } from './blank-link';

type ItemType = {
    name: string;
    href: string;
    icon?: keyof typeof icons | undefined;
};

type NavigationType = {
    solutions: ItemType[];
    support: ItemType[];
    company: ItemType[];
    legal: ItemType[];
    social: ItemType[];
};

const navigation = {
    solutions: [
        { name: 'Marketing', href: '#' },
        { name: 'Analytics', href: '#' },
        { name: 'Commerce', href: '#' },
        { name: 'Insights', href: '#' },
    ],
    support: [
        { name: 'Pricing', href: '#' },
        { name: 'Documentation', href: '#' },
        { name: 'Guides', href: '#' },
        { name: 'API Status', href: '#' },
    ],
    company: [
        { name: 'About', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Jobs', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Partners', href: '#' },
    ],
    legal: [
        { name: 'Claim', href: '#' },
        { name: 'Privacy', href: '#' },
        { name: 'Terms', href: '#' },
    ],
    social: [
        {
            name: 'Whatsapp',
            href: '#',
            icon: 'IconBrandWhatsapp',
        },
        {
            name: 'Instagram',
            href: '#',
            icon: 'IconBrandInstagram',
        },
        {
            name: 'Facebook',
            href: '#',
            icon: 'IconBrandFacebook',
        },
        {
            name: 'Studio',
            href: '#',
            icon: 'IconMapPin',
        },
    ],
} satisfies NavigationType;

export function BottomNavigation() {
    return (
        <footer className='bg-background' aria-labelledby='footer-heading'>
            <h2 id='footer-heading' className='sr-only'>
                Footer
            </h2>
            <div className='mx-auto max-w-5xl px-6 pb-8 pt-16 lg:px-8'>
                <div className='xl:grid xl:grid-cols-1 xl:gap-8'>
                    <div className='space-y-8'>
                        <ApplicationLogo className='h-20 w-auto' />
                        <p className='text-sm leading-6 text-muted-foreground'>
                            Making the world a better place through constructing elegant hierarchies.
                        </p>
                        <div className='flex space-x-6'>
                            {navigation.social.map((item) => (
                                <BlankLink
                                    key={item.name}
                                    href={item.href}
                                    className='text-gray-500 hover:text-muted-foreground'>
                                    <span className='sr-only'>{item.name}</span>
                                    <Icon name={item?.icon} className='h-6 w-6' />
                                </BlankLink>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24'>
                    <p className='text-xs leading-5 text-muted-foreground'>
                        &copy; {new Date().getFullYear()} Safoto, Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
