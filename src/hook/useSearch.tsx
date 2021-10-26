import { SearchContext } from 'context/search';
import { useContext } from 'react';

export const useSearch = () => {
  const context = useContext(SearchContext);

  return context;
};
