import type * as icons from '@tabler/icons-react';

type MenuType = {
    name: string;
    url: string;
    icon?: keyof typeof icons;
};

export const menus = [
    {
        name: 'home',
        url: '/',
        icon: 'IconBrandSafari',
    },
    {
        name: 'about',
        url: '/about',
        icon: 'IconInfoCircle',
    },
    {
        name: 'project',
        url: '/project',
        icon: 'IconCamera',
    },
] satisfies MenuType[];
