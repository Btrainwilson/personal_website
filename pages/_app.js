// `pages/_app.js`
import '../styles/global.css';
import '../styles/output.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;

}
