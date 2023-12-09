import { SecondaryHeading } from '@/components/headings';
import { Icon } from '@/components/icon';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'About / Safoto',
};

export default function About() {
    return (
        <div className='p-5'>
            <div className='grid grid-cols-1 content-center items-center gap-10 md:grid-cols-2'>
                <div className='col-auto'>
                    <SecondaryHeading>Sejak 2020</SecondaryHeading>
                    <p className='mt-5 text-[0.900rem]/[1.35rem] leading-relaxed tracking-wide text-primary/70'>
                        Kami telah berkomitmen menjadi penyedia jasa fotografi dan videografi terkemuka di
                        seajatappareng, dengan komitmen kuat untuk menciptakan pengalaman yang unik dan eksklusif di
                        setiap momen. Melalui konsep baru, kreativitas, dan dedikasi terhadap keunggulan, kami berupaya
                        memberikan layanan yang membedakan diri, menjaga profesionalitas dalam setiap aspek, serta terus
                        berinovasi untuk memenuhi harapan klien.
                    </p>
                </div>
                <div className='col-auto'>
                    <AspectRatio ratio={16 / 9}>
                        <Image
                            src={'/images/about-1.png'}
                            alt='Tentang Safoto 1'
                            width={551}
                            height={830}
                            loading='eager'
                            className='aspect-video h-full w-full rounded-lg object-cover'
                        />
                    </AspectRatio>
                </div>
            </div>
            <Separator className='my-10 md:my-20' />
            <div className='grid grid-cols-1 content-center items-center gap-10 md:grid-cols-2'>
                <div className='order-last col-auto md:order-first'>
                    <AspectRatio ratio={16 / 9}>
                        <Image
                            src={'/images/about-3.png'}
                            alt='Tentang Safoto 3'
                            width={551}
                            height={830}
                            loading='eager'
                            className='aspect-video h-full w-full rounded-lg object-cover'
                        />
                    </AspectRatio>
                </div>
                <div className='order-first col-auto md:order-last'>
                    <SecondaryHeading>Misi kami</SecondaryHeading>
                    <p className='mt-5 text-[0.900rem]/[1.35rem] leading-relaxed tracking-wide text-primary/70'>
                        Misi kami adalah memberikan pengalaman unik dan eksklusif di setiap momen melalui konsep baru,
                        pelayanan profesional, solusi terbaik, hasil printing dan finishing terjaga, serta membangun
                        hubungan yang kuat dengan klien berdasarkan kepercayaan. Kami berkomitmen untuk memberikan
                        penawaran, kerjasama, ide, harga, dan kualitas terbaik demi kepuasan dan kepercayaan klien.
                    </p>
                </div>
            </div>
            <Separator className='my-10 md:my-20' />
            <div>
                <h2 className='text-center text-2xl font-bold text-foreground'>Tim Terbaik Kami</h2>
                <div className='mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3'>
                    <Card className='mx-auto max-w-xs'>
                        <div className='p-3'>
                            <Image
                                src={'/images/team-4.jpg'}
                                alt='Team 4'
                                width={2000}
                                height={1408}
                                className='aspect-square h-full w-full rounded-lg border object-cover lg:h-[315px] lg:w-[315px]'
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
                    <Card className='mx-auto max-w-xs'>
                        <div className='p-3'>
                            <Image
                                src={'/images/team-4.jpg'}
                                alt='Team 4'
                                width={2000}
                                height={1408}
                                className='aspect-square h-full w-full rounded-lg border object-cover lg:h-[315px] lg:w-[315px]'
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
                    <Card className='mx-auto max-w-xs'>
                        <div className='p-3'>
                            <Image
                                src={'/images/team-4.jpg'}
                                alt='Team 4'
                                width={2000}
                                height={1408}
                                className='aspect-square h-full w-full rounded-lg border object-cover lg:h-[315px] lg:w-[315px]'
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
        </div>
    );
}
