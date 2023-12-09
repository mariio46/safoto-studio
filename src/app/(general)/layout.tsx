import { BottomNavigation } from '@/components/bottom-navigation';
import Navigation from '@/components/navigation';
import ResponsiveNavigation from '@/components/responsive-navigation';
import { Separator } from '@/components/ui/separator';
import { Children } from '@/types';

export default function Layout({ children }: Children) {
    return (
        <>
            <ResponsiveNavigation />
            <Navigation />
            <main className='mx-auto my-20 max-w-5xl sm:my-40'>{children}</main>
            <Separator className='my-10 md:my-20' />
            <BottomNavigation />
        </>
    );
}
