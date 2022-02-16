import '../styles/globals.css';
import Branding from '../components/Branding';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Branding />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
