import Head from 'next/head';
import Image from 'next/image';

const iconSize = 50;

function image(icon, text) {
    return (
        <>
            <Image
                src={'/icon/' + icon + '.svg'}
                alt={text}
                width={iconSize}
                height={iconSize}
            />
            <p>{text}</p>
        </>
    );
}

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
                <div className='intro'>
                    <h1 className='intro--title'>
                        Salut, moi c&apos;est Axel, un développer web junior.
                    </h1>
                    <p className='intro--text'>
                        Toujours en quête de connaissance, je suis à la
                        recherche d&apos;une entreprise dans laquelle je pourrais
                        continuer de progresser.
                    </p>
                </div>

                <div className='info'>
                    <section className='info--section'>
                        <h2 className='info--title'>
                            Durant ma formation j'ai exploré :
                        </h2>
                        <ul className='info--text'>
                            <li>{image('html', 'HTML5')}</li>
                            <li>{image('css', 'CSS3')}</li>
                            <li>{image('javascript', 'JavaScript')}</li>
                            <li>{image('sass', 'Sass')}</li>
                            <li>{image('react', 'React')}</li>
                        </ul>
                    </section>

                    <section className='info--section'>
                        <h2 className='info--title'>
                            Durant mon temps libre j'ai découvert :
                        </h2>
                        <ul className='info--text'>
                            <li>{image('docker', 'Docker')}</li>
                            <li>{image('next', 'Next.js')}</li>
                            <li>{image('python', 'Python3')}</li>
                            <li>{image('php', 'PHP')}</li>
                            <li>{image('mysql', 'MySQL')}</li>
                        </ul>
                    </section>
                </div>
            </div>
        </>
    );
}
