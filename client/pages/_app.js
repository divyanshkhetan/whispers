import '../styles/globals.css';
import Branding from '../components/Branding';
import Head from 'next/head';

// TODO: Responsive design
// TODO: Add Google Analytics to this application
// TODO: Add developer footer to this application
// TODO: Make it compatible for web app

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="https://third-party-script.js"></Script>
      <Head>
        <script src="https://kit.fontawesome.com/ebdf1e96a8.js" crossOrigin="anonymous"></script>
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
      </Head>
      <Branding />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
