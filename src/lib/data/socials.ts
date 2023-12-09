import * as icons from '@tabler/icons-react';

type SocialType = {
    name: string;
    icon: keyof typeof icons;
    color: string;
    url: string;
};

export const socials = [
    {
        name: 'Whatsapp',
        icon: 'IconBrandWhatsapp',
        color: 'text-green-500',
        url: '#',
    },
    {
        name: 'Instagram',
        icon: 'IconBrandInstagram',
        color: 'text-pink-500',
        url: '#',
    },
    {
        name: 'Facebook',
        icon: 'IconBrandFacebook',
        color: 'text-blue-500',
        url: '#',
    },
    {
        name: 'Studio',
        icon: 'IconMapPin',
        color: 'text-emerald-500',
        url: '#',
    },
] satisfies SocialType[];
