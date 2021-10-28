import { useEffect, useState } from 'react';
import { Layout } from 'components/Layout';
import { useSearch } from 'hook/useSearch';
import { Books } from 'components/Books';
import api from 'services/api';
import * as S from './styles';

type Book = {
  id: string;
  title: string;
  author: string;
  imageUrl: string;
};

type Item = {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    imageLinks: {
      thumbnail: string;
    };
  };
};

export type ApiBooks = {
  items: Item[];
  totalItems: number;
};

export const ListBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [page, setPage] = useState(0);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const { query } = useSearch();

  useEffect(() => {
    (async () => {
      if (query) {
        try {
          setLoading(true);

          const { data } = await api.get<ApiBooks>(
            `/volumes?q=${query}&startIndex=${page}&maxResults=12`
          );

          const serializedBooks = data.items.map(item => ({
            id: item.id,
            title: item.volumeInfo.title,
            author: item.volumeInfo.authors ? item.volumeInfo.authors[0] : '',
            imageUrl: item.volumeInfo?.imageLinks?.thumbnail,
          }));

          setBooks(serializedBooks);
          setError(false);
        } catch (err) {
          console.log(err);
          setError(true);
        } finally {
          setLoading(false);
        }
      }
    })();
  }, [query]);

  useEffect(() => {
    (async () => {
      if (page && query) {
        const { data } = await api.get<ApiBooks>(
          `/volumes?q=${query}&startIndex=${page}&maxResults=12`
        );

        const serializedBooks = data.items.map(item => ({
          id: item.id,
          title: item.volumeInfo.title,
          author: item.volumeInfo.authors ? item.volumeInfo.authors[0] : '',
          imageUrl: item.volumeInfo?.imageLinks?.thumbnail,
        }));

        setBooks(prev => [...prev, ...serializedBooks]);
      }
    })();
  }, [page]);

  return (
    <Layout>
      <>
        {error ? (
          <strong>There are no books for this research!</strong>
        ) : (
          !!books.length && (
            <>
              <Books books={books} loading={loading} />
              {!loading && (
                <S.Button disabled={false} onClick={() => setPage(page + 1)}>
                  Load More
                </S.Button>
              )}
            </>
          )
        )}
      </>
    </Layout>
  );
};
