import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <title>Axel Damart</title>
                <meta
                    name='description'
                    content='Web Developper Portfolio'
                />
                <link
                    rel='icon'
                    href='/favicon.ico'
                />
            </Head>

            <div className='container'>
                <h1 className='home'>Salut, moi c&apos;est Axel.</h1>
            </div>
        </>
    );
}
