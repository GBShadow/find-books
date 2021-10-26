import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import { MdArrowBack, MdOutlineImageNotSupported } from 'react-icons/md';
import api from 'services/api';
import * as S from './styles';

type Book = {
  title: string;
  subtitle: string;
  description: string;
  author: string;
  imageUrl: string;
};

type ApiBook = {
  volumeInfo: {
    title: string;
    subtitle: string;
    description: string;
    authors: string[];
    imageLinks: {
      thumbnail: string;
    };
  };
};

type DetailsProps = {
  id: string;
};

export const Details = ({ id }: DetailsProps) => {
  const router = useRouter();

  const [book, setBook] = useState<Book>();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);

        const { data } = await api.get<ApiBook>(`/volumes/${id}`);

        console.log(data);

        const serializedBook = {
          title: data.volumeInfo.title,
          subtitle: data.volumeInfo.subtitle,
          description: data.volumeInfo.description,
          author: data.volumeInfo?.authors ? data.volumeInfo.authors[0] : '',
          imageUrl: data.volumeInfo.imageLinks?.thumbnail,
        };

        setBook(serializedBook);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  return (
    <S.Container>
      <button onClick={() => router.back()}>
        <MdArrowBack size={24} />
      </button>
      <S.Header>
        <S.BackgroundImage>
          <div>
            {book?.imageUrl ? (
              <img src={book?.imageUrl} alt={`Cover of ${book?.title} book`} />
            ) : (
              <>
                <MdOutlineImageNotSupported size={40} />
                <span>No Image</span>
              </>
            )}
          </div>
        </S.BackgroundImage>
      </S.Header>
      <S.Content>
        <h1>
          {book?.title}: <span>{book?.subtitle}</span>
        </h1>
        <strong>{book?.author}</strong>
        <S.DescriptionContainer>
          <S.Description>{book?.description}</S.Description>
        </S.DescriptionContainer>
        <S.Menu>
          <button>Read</button>
          <button>Listen</button>
          <button>Share</button>
        </S.Menu>
      </S.Content>
    </S.Container>
  );
};
