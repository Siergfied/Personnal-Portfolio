import Head from 'next/head';

export default function Error() {
    return (
        <>
            <Head>
                <title>AD - Error 404</title>
                <meta
                    name='description'
                    content='Error 404'
                />
            </Head>
            <div className='error'>
                <h2 className='error__code'>Error 404</h2>
                <p className='error__text'>
                    La page demandé n&apos;a pû être trouvé ou n&apos;existe
                    pas.
                </p>
            </div>
        </>
    );
}
