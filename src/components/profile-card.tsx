import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
import { Icon } from './icon';
import { PrimaryHeading } from './headings';

type ProfileCardType = {
    name: string;
    occupation: string;
    image_path: string;
    instagram?: string | null;
    facebook?: string | null;
    twitter?: string | null;
    whatsapp?: string | null;
    linkedin?: string | null;
};

export default function ProfileCard({
    name,
    occupation,
    image_path,
    instagram,
    facebook,
    twitter,
    whatsapp,
    linkedin,
}: ProfileCardType) {
    return (
        <Card className='mx-auto max-w-sm rounded-lg border bg-background'>
            <CardHeader className='p-4'>
                <Image
                    alt={name}
                    className='rounded-sm'
                    height={300}
                    src={image_path}
                    style={{
                        aspectRatio: '300/300',
                        objectFit: 'cover',
                    }}
                    width={300}
                />
            </CardHeader>
            <CardContent className='p-4'>
                <PrimaryHeading className='text-xl font-semibold'>{name}</PrimaryHeading>
                <p className='text-[0.900rem]/[1.35rem] font-normal text-primary/70'>{occupation}</p>
                <div className='mt-4 flex justify-start gap-3'>
                    {whatsapp && <Icon name='IconBrandWhatsapp' className='text-muted-foreground' />}
                    {instagram && <Icon name='IconBrandInstagram' className='text-muted-foreground' />}
                    {facebook && <Icon name='IconBrandFacebook' className='text-muted-foreground' />}
                    {twitter && <Icon name='IconBrandX' className='text-muted-foreground' />}
                    {linkedin && <Icon name='IconBrandLinkedin' className='text-muted-foreground' />}
                </div>
            </CardContent>
        </Card>
    );
}
