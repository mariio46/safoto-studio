import Image from 'next/image';

export default function Home() {
    return (
        <div className='h-[1000rem] p-5'>
            <h1 className='text-3xl font-bold text-foreground hover:text-primary'>Hey, Kami Safoto 👋</h1>
            <p className='my-10 max-w-4xl tracking-wide text-muted-foreground '>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni magnam tempora voluptates illum
                voluptatibus. Illo neque animi reprehenderit, sed consectetur maxime! Laborum nam totam iure, aliquid
                repellat tempora officia! Et, corrupti unde eos modi porro, dolores delectus est nemo repellendus cum
                optio maxime ut ea nisi sed impedit minus ipsa quos assumenda aperiam nostrum voluptatem blanditiis.
                Impedit, reprehenderit vel eveniet voluptatibus provident eum saepe aperiam magni ducimus tenetur
                suscipit ratione, incidunt modi pariatur voluptatem dolorem.
            </p>
            <div className=' grid grid-cols-1 gap-10 sm:grid-cols-3'>
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
            </div>
        </div>
    );
}
