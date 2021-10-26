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
  const [totalBooks, setTotalBooks] = useState(0);
  const [page, setPage] = useState(0);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const { query } = useSearch();

  useEffect(() => {
    (async () => {
      if (query) {
        try {
          console.log(query);
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

          console.log({ serializedBooks });

          setTotalBooks(data.totalItems);
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
      if (page) {
        const { data } = await api.get<ApiBooks>(
          `/volumes?q=${query}&startIndex=${page}&maxResults=12`
        );

        const serializedBooks = data.items.map(item => ({
          id: item.id,
          title: item.volumeInfo.title,
          author: item.volumeInfo.authors ? item.volumeInfo.authors[0] : '',
          imageUrl: item.volumeInfo?.imageLinks?.thumbnail,
        }));

        setTotalBooks(data.totalItems);
        setBooks(prev => [...prev, ...serializedBooks]);
      }
    })();
  }, [page]);

  console.log(error);

  return (
    <Layout>
      <>
        {error ? (
          <strong>Não há livros para essa pesquisa</strong>
        ) : (
          !!books.length && (
            <>
              <Books books={books} loading={loading} />
              {!loading && (
                <S.Button onClick={() => setPage(page + 1)}>Load More</S.Button>
              )}
            </>
          )
        )}
      </>
    </Layout>
  );
};
