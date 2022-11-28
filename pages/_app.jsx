import '../styles/globals.css';

//Components CSS
import '../styles/components/Header.css';
import '../styles/components/Footer.css';
import '../styles/components/Layout.css';
import '../styles/components/Langage.css';

//Pages CSS
import '../styles/pages/index.css';
import '../styles/pages/realisation.css';
import '../styles/pages/experiences.css';
import '../styles/pages/contact.css';
import '../styles/pages/404.css';

import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
