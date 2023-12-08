import { PrimaryHeading } from '@/components/headings';
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
import { collections } from '@/lib/data/projects';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Project / Safoto',
};

export default function ProjectPage() {
    return (
        <div className='p-5'>
            <PrimaryHeading>Projects</PrimaryHeading>
            <p className='mt-5 max-w-4xl tracking-wide text-muted-foreground'>
                Inilah semua project yang telah kami kerjakan dari tahun 2020 hingga pada hari ini, beberapa project
                dibawah terbagi dalam beberapa kategori.
            </p>
            <ProjectTemplate>
                {collections.map((projects) => (
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
        </div>
    );
}
