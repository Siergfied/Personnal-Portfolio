import Head from 'next/head';

export default function Contact() {
    return (
        <>
            <Head>
                <title>AD - Contact</title>
                <meta
                    name='description'
                    content='Contact'
                />
            </Head>

            <div className='contact'>
                <h2 className='contact__text'>
                    Vous voulez entrain en contact avec moi ?
                </h2>
                <a
                    href='mailto:axel.damart@gmail.com'
                    className='contact__link'
                >
                    Envoyer un email
                </a>
            </div>
        </>
    );
}
