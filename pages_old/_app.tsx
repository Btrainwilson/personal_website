// `pages/_app.js`
import '../styles/global.css';
import '../styles/output.css';
import '../app/globals.css';

export default function App({ Component, pageProps }) {
  return (

    <>
      <h1>HI</h1>
      <Component {...pageProps} />;
    </>
  );



}
