import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
    return (
        <>
            <div className='header'>
                <Header />
            </div>
            <div className='content'>
                <Footer />
                <main>{children}</main>
            </div>
        </>
    );
}
