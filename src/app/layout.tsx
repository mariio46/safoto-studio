import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import './globals.css';

const figtree = Figtree({ subsets: ['latin'] });
const appName: string | undefined = process.env.APP_NAME;

export const metadata: Metadata = {
    title: appName ?? 'APPLICATION',
    description: 'Company profile from Safoto Studio.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body className={cn(figtree.className, 'mx-auto min-h-screen max-w-screen-2xl font-sans antialiased')}>
                <ThemeProvider
                    attribute='class'
                    defaultTheme='dark'
                    forcedTheme='dark'
                    enableSystem
                    disableTransitionOnChange>
                    {children}
                </ThemeProvider>
                <Toaster />
            </body>
        </html>
    );
}
