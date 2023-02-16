import "../styles/globals.css";
import { StatusProvider } from "../context/statusContext";
import { Analytics } from '@vercel/analytics/react';


function MyApp({ Component, pageProps }) {
  return (
    <StatusProvider>
      <Component {...pageProps} />
      <Analytics />

    </StatusProvider>
  );
}

export default MyApp;
