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
import { BlankLink } from '@/components/blank-link';
import { PrimaryHeading, SecondaryHeading } from '@/components/headings';
import { Icon } from '@/components/icon';
import Image from 'next/image';
import ProjectPage from '../project/page';
import { HomeCollections } from '@/lib/data/projects';

export default function Home() {
    return (
        <div className='p-5'>
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
            </section>

            <section id='find-us'>
                <SecondaryHeading className='mt-20'>Temukan Kami</SecondaryHeading>
                <div>
                    <div className='my-8 flex w-full flex-row space-x-2 overflow-x-auto'>
                        <BlankLink
                            href='#'
                            className='flex items-center justify-between gap-x-2 rounded border bg-secondary px-3 py-4 text-base font-semibold text-foreground/70 hover:bg-secondary/80 hover:text-green-500'>
                            <Icon name='IconBrandWhatsapp' className='h-6 w-6 stroke-[1.8]' />
                            Whatsapp
                        </BlankLink>
                        <BlankLink
                            href='#'
                            className='flex items-center justify-between gap-x-2 rounded border bg-secondary px-3 py-4 text-base font-semibold text-foreground/70 hover:bg-secondary/80 hover:text-pink-500'>
                            <Icon name='IconBrandInstagram' className='h-6 w-6 stroke-[1.8]' />
                            Instagram
                        </BlankLink>
                        <BlankLink
                            href='#'
                            className='flex items-center justify-between gap-x-2 rounded border bg-secondary px-3 py-4 text-base font-semibold text-foreground/70 hover:bg-secondary/80 hover:text-blue-500'>
                            <Icon name='IconMapPin' className='h-6 w-6 stroke-[1.8]' />
                            Studio
                        </BlankLink>
                    </div>
                </div>
            </section>
        </div>
    );
}
