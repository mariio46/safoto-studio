import { Icon } from '@/components/icon';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';

export default function About() {
    return (
        <div>
            <div className='flex items-center justify-between'>
                <div>
                    <h2 className='text-3xl font-bold text-foreground hover:text-primary'>Sejak 2020</h2>
                    <p className='mt-8 max-w-lg tracking-wide text-muted-foreground'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum numquam maiores nulla molestias a
                        sit dolore aliquid, quos asperiores! Aliquam corporis atque esse nihil praesentium totam itaque
                        unde rerum. Optio, doloribus. Et nisi, qui modi hic, aliquid fugiat adipisci facilis doloribus
                        mollitia voluptatem, id optio itaque quas deserunt consequatur quasi.
                    </p>
                </div>
                <div>
                    <Image
                        src={'/images/about-1.png'}
                        alt='Tentang Safoto 1'
                        width={551}
                        height={830}
                        loading='eager'
                        className='h-full w-[450px] rounded-lg object-cover'
                    />
                </div>
            </div>
            <Separator className='my-20' />
            <div className='flex items-center justify-between'>
                <div>
                    <Image
                        src={'/images/about-3.png'}
                        alt='Tentang Safoto 3'
                        width={551}
                        height={830}
                        loading='eager'
                        className='h-full w-[450px] rounded-lg object-cover'
                    />
                </div>
                <div>
                    <h2 className='text-3xl font-bold text-foreground hover:text-primary'>Misi Kami</h2>
                    <p className='mt-8 max-w-lg tracking-wide text-muted-foreground'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum numquam maiores nulla molestias a
                        sit dolore aliquid, quos asperiores! Aliquam corporis atque esse nihil praesentium totam itaque
                        unde rerum. Optio, doloribus. Et nisi, qui modi hic, aliquid fugiat adipisci facilis doloribus
                        mollitia voluptatem, id optio itaque quas deserunt consequatur quasi.
                    </p>
                </div>
            </div>
            <Separator className='my-20' />
            <div>
                <h2 className='text-center text-3xl font-bold text-foreground hover:text-primary'>Tim Terbaik Kami</h2>
                <div className='mt-12 grid grid-cols-1 gap-10 md:grid-cols-3'>
                    <Card>
                        <div className='p-3'>
                            <Image
                                src={'/images/team-4.jpg'}
                                alt='Team 4'
                                width={2000}
                                height={1408}
                                className='h-[315px] w-[315px] rounded-lg border object-cover'
                            />
                            <div className='mt-3 '>
                                <h4 className='text-lg font-medium'>Asdar Amiruddin</h4>
                                <p className='text-sm text-muted-foreground'>Fotografer</p>
                            </div>
                            <div className='mt-2 flex items-center gap-x-2'>
                                <a
                                    href='https://www.instagram.com/asdarkao_/'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    <Icon
                                        name='IconBrandInstagram'
                                        className='text-muted-foreground hover:text-foreground'
                                    />
                                </a>
                                <a
                                    href='https://www.instagram.com/asdarkao_/'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    <Icon name='IconBrandX' className='text-muted-foreground hover:text-foreground' />
                                </a>
                            </div>
                        </div>
                    </Card>
                    <Card>
                        <div className='p-3'>
                            <Image
                                src={'/images/team-4.jpg'}
                                alt='Team 4'
                                width={2000}
                                height={1408}
                                className='h-[315px] w-[315px] rounded-lg border object-cover'
                            />
                            <div className='mt-3 '>
                                <h4 className='text-lg font-medium'>Asdar Amiruddin</h4>
                                <p className='text-sm text-muted-foreground'>Fotografer</p>
                            </div>
                            <div className='mt-2 flex items-center gap-x-2'>
                                <a
                                    href='https://www.instagram.com/asdarkao_/'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    <Icon
                                        name='IconBrandInstagram'
                                        className='text-muted-foreground hover:text-foreground'
                                    />
                                </a>
                                <a
                                    href='https://www.instagram.com/asdarkao_/'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    <Icon name='IconBrandX' className='text-muted-foreground hover:text-foreground' />
                                </a>
                            </div>
                        </div>
                    </Card>
                    <Card>
                        <div className='p-3'>
                            <Image
                                src={'/images/team-4.jpg'}
                                alt='Team 4'
                                width={2000}
                                height={1408}
                                className='h-[315px] w-[315px] rounded-lg border object-cover'
                            />
                            <div className='mt-3 '>
                                <h4 className='text-lg font-medium'>Asdar Amiruddin</h4>
                                <p className='text-sm text-muted-foreground'>Fotografer</p>
                            </div>
                            <div className='mt-2 flex items-center gap-x-2'>
                                <a
                                    href='https://www.instagram.com/asdarkao_/'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    <Icon
                                        name='IconBrandInstagram'
                                        className='text-muted-foreground hover:text-foreground'
                                    />
                                </a>
                                <a
                                    href='https://www.instagram.com/asdarkao_/'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    <Icon name='IconBrandX' className='text-muted-foreground hover:text-foreground' />
                                </a>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
            <Separator className='my-20' />
        </div>
    );
}
