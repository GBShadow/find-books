import { createContext, ReactElement, useState } from 'react';

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

  return (
    <SearchContext.Provider value={{ query, getQuery }}>
      {children}
    </SearchContext.Provider>
  );
};
