import "../styles/globals.css";
import "tailwindcss/tailwind.css";

import Header from "../Components/Header/Header";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header appName="Flex Money" />
      <div className="p-2">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
