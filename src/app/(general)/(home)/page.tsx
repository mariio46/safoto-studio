import { BlankLink } from '@/components/blank-link';
import { PrimaryHeading, SecondaryHeading } from '@/components/headings';
import { Icon } from '@/components/icon';
import {
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
} from '@/components/project-template';
import { buttonVariants } from '@/components/ui/button';
import { HomeCollections } from '@/lib/data/projects';
import { socials } from '@/lib/data/socials';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <div className='relative p-5'>
            <section id='home'>
                <PrimaryHeading>Hey, Kami Safoto 👋</PrimaryHeading>
                <p className='my-10 max-w-4xl text-[0.900rem]/[1.35rem] leading-relaxed tracking-wide text-primary/70 lg:text-[1.063rem]'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni magnam tempora voluptates illum
                    voluptatibus. Illo neque animi reprehenderit, sed consectetur maxime! Laborum nam totam iure,
                    aliquid repellat tempora officia! Et, corrupti unde eos modi porro, dolores delectus est nemo
                    repellendus cum optio maxime ut ea nisi sed impedit minus ipsa quos assumenda aperiam nostrum
                    voluptatem blanditiis. Impedit, reprehenderit vel eveniet voluptatibus provident eum saepe aperiam
                    magni ducimus tenetur suscipit ratione, incidunt modi pariatur voluptatem dolorem.
                </p>
                <div className='grid grid-cols-2 gap-10 sm:grid-cols-4'>
                    <div className='grid grid-cols-1 gap-10'>
                        <Image
                            loading='eager'
                            src='/images/home-5.jpg'
                            alt='home-5'
                            width={640}
                            height={440}
                            className='h-full w-full rounded-lg border border-muted-foreground/40 object-cover'
                        />
                        <Image
                            loading='eager'
                            src='/images/home-7.jpg'
                            alt='home-7'
                            width={600}
                            height={900}
                            className='h-full w-full rounded-lg border border-muted-foreground/40 object-cover'
                        />
                    </div>
                    <div className='grid grid-cols-1 gap-10'>
                        <Image
                            loading='eager'
                            src='/images/home-2.jpg'
                            alt='home-2'
                            width={600}
                            height={900}
                            className='h-full w-full rounded-lg border border-muted-foreground/40 object-cover'
                        />
                        <Image
                            loading='eager'
                            src='/images/home-3.jpg'
                            alt='home-3'
                            width={640}
                            height={440}
                            className='h-full w-full rounded-lg border border-muted-foreground/40 object-cover'
                        />
                    </div>
                    <div className='grid grid-cols-1 gap-10'>
                        <Image
                            loading='eager'
                            src='/images/home-6.jpg'
                            alt='home-6'
                            width={640}
                            height={440}
                            className='h-full w-full rounded-lg border border-muted-foreground/40 object-cover'
                        />
                        <Image
                            loading='eager'
                            src='/images/home-4.jpg'
                            alt='home-4'
                            width={600}
                            height={900}
                            className='h-full w-full rounded-lg border border-muted-foreground/40 object-cover'
                        />
                    </div>
                    <div className='grid grid-cols-1 gap-10'>
                        <Image
                            loading='eager'
                            src='/images/home-7.jpg'
                            alt='home-7'
                            width={600}
                            height={900}
                            className='h-full w-full rounded-lg border border-muted-foreground/40 object-cover'
                        />
                        <Image
                            loading='eager'
                            src='/images/home-5.jpg'
                            alt='home-5'
                            width={640}
                            height={440}
                            className='h-full w-full rounded-lg border border-muted-foreground/40 object-cover'
                        />
                    </div>
                </div>
            </section>

            <section id='overview-project'>
                <SecondaryHeading className='mt-20'>Ringkasan Project</SecondaryHeading>
                <p className='mt-5 max-w-4xl text-[0.900rem]/[1.35rem] leading-relaxed tracking-wide text-primary/70 lg:text-[1.063rem]'>
                    Inilah beberapa project yang telah kami kerjakan dari tahun 2020 hingga pada hari ini.
                </p>
                <ProjectTemplate>
                    {HomeCollections.map((projects) => (
                        <Project key={projects.key}>
                            {projects.collection.map((item, i) => (
                                <ProjectBLock key={i}>
                                    <ProjectBLockBlankLink href={item.link}>
                                        <ProjectBLockItem>
                                            <ProjectBLockItemContent>
                                                <Image
                                                    loading='eager'
                                                    alt={item.images.alt_name}
                                                    width={64}
                                                    height={64}
                                                    className='h-16 w-16 rounded-full border border-neutral-200 object-cover dark:border-neutral-700'
                                                    sizes='33vw'
                                                    src={item.images.src}
                                                />
                                                <ProjectBLockItemIcon>
                                                    <Image
                                                        alt={item.icons.alt_name}
                                                        src={item.icons.name}
                                                        width={50}
                                                        height={50}
                                                    />
                                                </ProjectBLockItemIcon>
                                            </ProjectBLockItemContent>
                                            <ProjectBlockItemWords>
                                                <ProjectBlockItemTitle>{item.name}</ProjectBlockItemTitle>
                                                <ProjectBlockItemDescription>
                                                    {item.description}
                                                </ProjectBlockItemDescription>
                                            </ProjectBlockItemWords>
                                        </ProjectBLockItem>
                                        <ProjectBlockRedirect>
                                            <Icon name='IconArrowNarrowRight' className='h-7 w-7' />
                                        </ProjectBlockRedirect>
                                    </ProjectBLockBlankLink>
                                </ProjectBLock>
                            ))}
                        </Project>
                    ))}
                </ProjectTemplate>
                <div className='flex items-center justify-end'>
                    <Link
                        href={'/project'}
                        className={cn(
                            buttonVariants({
                                variant: 'outline',
                            }),
                            'group inline-flex items-center gap-x-2 rounded-full',
                        )}>
                        Lihat project lainnya
                        <Icon
                            name='IconArrowNarrowRight'
                            className='transition-transform duration-300 group-hover:-rotate-12'
                        />
                    </Link>
                </div>
            </section>

            <section id='find-us'>
                <SecondaryHeading className='mt-20'>Temukan Kami</SecondaryHeading>
                <div className='mt-5 flex flex-wrap items-center justify-center gap-4 sm:justify-start'>
                    {socials.map((item, i) => (
                        <BlankLink
                            key={i}
                            href={item.url}
                            className={cn(
                                buttonVariants({ variant: 'secondary' }),
                                'inline-flex h-12 w-40 justify-center gap-x-2 px-6 py-2',
                                item.color,
                            )}>
                            <Icon name={item.icon} className='h-6 w-6 stroke-[1.8]' />
                            {item.name}
                        </BlankLink>
                    ))}
                </div>
            </section>
        </div>
    );
}
