import Image from 'next/image';

export default function Footer() {
    const imageSize = 30;

    return (
        <footer className='footer'>
            <ul>
                <li>
                    <a
                        href='https://www.linkedin.com/in/axel-damart'
                        target='_blank'
                        rel='noreferrer'
                        aria-label='Linkedin'
                        className='footer__link'
                    >
                        <Image
                            src='/icon/linkedin.svg'
                            alt='Linkedin Logo'
                            width={imageSize}
                            height={imageSize}
                        />
                    </a>
                </li>
                <li>
                    <a
                        href='https://github.com/Siergfied'
                        target='_blank'
                        rel='noreferrer'
                        className='footer__link'
                        aria-label='GitHub'
                    >
                        <Image
                            src='/icon/github.svg'
                            alt='GitHub Logo'
                            width={imageSize}
                            height={imageSize}
                        />
                    </a>
                </li>
                <li>
                    <a
                        href='https://twitter.com/ADSiergfied'
                        target='_blank'
                        rel='noreferrer'
                        className='footer__link'
                        aria-label='Twitter'
                    >
                        <Image
                            src='/icon/twitter.svg'
                            alt='Twitter Logo'
                            width={imageSize}
                            height={imageSize}
                        />
                    </a>
                </li>
            </ul>
        </footer>
    );
}
