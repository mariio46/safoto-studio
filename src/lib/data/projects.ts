// Foto Pernikahan
// Foto Profil Perusahaan
// Video Dokumentasi
// Foto Produk
// Foto Studio

type ProjectsType = {
    id: number;
    name: string;
    description: string;
    images: {
        src: string;
        alt_name: string;
    };
    icons: {
        name: string;
        alt_name: string;
    };
    link: string;
};

type CollectionType = {
    key: number;
    collection: ProjectsType[];
};

const first_line_project = [
    {
        id: 1,
        name: 'Foto Pernikahan',
        description: '-+ 5000 Foto',
        images: {
            src: '/images/home-5.jpg',
            alt_name: 'Foto Wedding',
        },
        icons: {
            name: '/svg/google-drive.svg',
            alt_name: 'Google Drive Logo',
        },
        link: '#',
    },
    {
        id: 2,
        name: 'Foto Profil Perusahaan',
        description: '-+ 500 Foto',
        images: {
            src: '/images/home-5.jpg',
            alt_name: 'Foto Profil Perusahaan',
        },
        icons: {
            name: '/svg/google-drive.svg',
            alt_name: 'Google Drive Logo',
        },
        link: '#',
    },
] satisfies ProjectsType[];

const second_line_project = [
    {
        id: 1,
        name: 'Video Dokumentasi',
        description: '-+ 50 Video',
        images: {
            src: '/images/home-5.jpg',
            alt_name: 'Video Dokumentasi',
        },
        icons: {
            name: '/svg/google-drive.svg',
            alt_name: 'Google Drive Logo',
        },
        link: '#',
    },
    {
        id: 2,
        name: 'Foto Produk',
        description: '-+ 500 Foto',
        images: {
            src: '/images/home-5.jpg',
            alt_name: 'Foto Produk',
        },
        icons: {
            name: '/svg/google-drive.svg',
            alt_name: 'Google Drive Logo',
        },
        link: '#',
    },
] satisfies ProjectsType[];

const third_line_project = [
    {
        id: 1,
        name: 'Foto Studio',
        description: '-+ 5000 Foto',
        images: {
            src: '/images/home-3.jpg',
            alt_name: 'Foto Studio',
        },
        icons: {
            name: '/svg/google-drive.svg',
            alt_name: 'Google Drive Logo',
        },
        link: '#',
    },
] satisfies ProjectsType[];

export const collections = [
    {
        key: 1,
        collection: first_line_project,
    },
    {
        key: 2,
        collection: second_line_project,
    },
    {
        key: 3,
        collection: third_line_project,
    },
] satisfies CollectionType[];

export const HomeCollections = [
    {
        key: 1,
        collection: first_line_project,
    },
] satisfies CollectionType[];
