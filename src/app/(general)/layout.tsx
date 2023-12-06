import Navigation from '@/components/navigation';
import { Children } from '@/types';

export default function Layout({ children }: Children) {
    return (
        <>
            <Navigation />
            <main className='mx-auto mt-0 max-w-6xl sm:mt-40'>{children}</main>
        </>
    );
}
