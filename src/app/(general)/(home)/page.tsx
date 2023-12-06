export default function Home() {
    return (
        <div className='h-[1000rem] p-5'>
            <h1 className='text-3xl font-bold text-foreground hover:text-primary'>Hey, Kami Safoto 👋</h1>
            <p className='my-8 max-w-4xl tracking-wide text-muted-foreground '>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni magnam tempora voluptates illum
                voluptatibus. Illo neque animi reprehenderit, sed consectetur maxime! Laborum nam totam iure, aliquid
                repellat tempora officia! Et, corrupti unde eos modi porro, dolores delectus est nemo repellendus cum
                optio maxime ut ea nisi sed impedit minus ipsa quos assumenda aperiam nostrum voluptatem blanditiis.
                Impedit, reprehenderit vel eveniet voluptatibus provident eum saepe aperiam magni ducimus tenetur
                suscipit ratione, incidunt modi pariatur voluptatem dolorem.
            </p>
            <div className=' grid grid-cols-1 gap-10 md:grid-cols-3'>
                <div className='grid grid-cols-1 gap-10'>
                    <img
                        src='https://leerob.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsummit.52edaff7.jpg&w=640&q=75'
                        className='h-40 w-full rounded-lg border border-muted-foreground/40 object-cover'
                        alt='Hello 1'
                    />
                    <img
                        src='https://leerob.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffilming.bffde3c3.jpg&w=640&q=75'
                        className='h-full w-full rounded-lg border border-muted-foreground/40 object-cover'
                        alt='Hello 1'
                    />
                </div>
                <div className='grid grid-cols-1 gap-10'>
                    <img
                        src='https://leerob.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Freactathon.30f4081b.jpg&w=640&q=75'
                        className='h-full w-full rounded-lg border border-muted-foreground/40 object-cover'
                        alt='hello 2'
                    />
                    <img
                        src='https://leerob.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsmashing.462a25b7.jpg&w=640&q=75'
                        className='h-full w-full rounded-lg border border-muted-foreground/40 object-cover'
                        alt='hello 2'
                    />
                </div>
                <div className='grid grid-cols-1 gap-10'>
                    <img
                        src='https://leerob.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fship.0e202908.jpg&w=640&q=75'
                        className='h-full w-full rounded-lg border border-muted-foreground/40 object-cover'
                        alt='hello 3'
                    />
                    <img
                        src='https://leerob.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmeetups.3bb2b521.jpg&w=256&q=75'
                        className='h-full w-full rounded-lg border border-muted-foreground/40 object-cover'
                        alt='hello 3'
                    />
                </div>
            </div>
        </div>
    );
}
