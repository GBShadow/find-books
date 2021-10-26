import { SearchProvider } from 'context/search';
import React from 'react';
import GlobalStyle from 'styles/global';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SearchProvider>
        <Component {...pageProps} />
      </SearchProvider>
      <GlobalStyle />
    </>
  );
}

export default MyApp;
