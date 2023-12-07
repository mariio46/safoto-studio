import Navigation from '@/components/navigation';
import ResponsiveNavigation from '@/components/responsive-navigation';
import { Children } from '@/types';

export default function Layout({ children }: Children) {
    return (
        <>
            <ResponsiveNavigation />
            <Navigation />
            <main className='mx-auto mt-20 max-w-5xl sm:mt-40'>{children}</main>
        </>
    );
}
