import '../styles/globals.css';
import Branding from '../components/Branding';
import Head from 'next/head';


// TODO: Add Google Analytics to this application
// TODO: Add developer footer to this application

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script src="https://kit.fontawesome.com/ebdf1e96a8.js" crossorigin="anonymous"></script>
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
      </Head>
      <Branding />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
