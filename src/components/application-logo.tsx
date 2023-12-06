import { cn } from '@/lib/utils';
import Image, { ImageProps } from 'next/image';

export default function ApplicationLogo({ className, src, alt, ...props }: ImageProps) {
    return <Image src={src} alt={alt} width={1000} height={400} className={cn('h-auto w-28', className)} {...props} />;
}
