import { createContext, ReactElement, useEffect, useState } from 'react';
import { setCookie, parseCookies } from 'nookies';

type SearchContextProps = {
  query: string;
  getQuery(text: string): void;
};

type SearchProviderProps = {
  children: ReactElement;
};

export const SearchContext = createContext({} as SearchContextProps);

export const SearchProvider = ({ children }: SearchProviderProps) => {
  const [query, setQuery] = useState('');

  const getQuery = (text: string) => {
    setQuery(text);
  };

  useEffect(() => {
    const { 'search.query': queryInCookie } = parseCookies();

    setQuery(queryInCookie);
  }, []);

  useEffect(() => {
    setCookie(undefined, 'search.query', JSON.stringify(query), {
      maxAge: 60 * 60 * 24,
      path: '/',
    });
  }, [query]);

  return (
    <SearchContext.Provider value={{ query, getQuery }}>
      {children}
    </SearchContext.Provider>
  );
};
