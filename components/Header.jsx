import NavLink from './NavLink';

export default function Header() {
    return (
        <header className='header'>
            <div className='logo'>
                <NavLink
                    href='/'
                    text='Axel Damart'
                    className='home__link'
                />
            </div>

            <nav className='navbar'>
                <ul className='navbar__container'>
                    <li>
                        <NavLink
                            href='/realisations'
                            text='Réalisations'
                            className='navbar__link'
                        />
                    </li>
                    <li>
                        <NavLink
                            href='/experiences'
                            text='Experiences'
                            className='navbar__link'
                        />
                    </li>
                    <li>
                        <NavLink
                            href='/contact'
                            text='Contact'
                            className='navbar__link'
                        />
                    </li>
                </ul>
            </nav>
        </header>
    );
}
