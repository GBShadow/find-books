import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import { setCookie } from 'nookies';

import {
  MdArrowBack,
  MdOutlineImageNotSupported,
  MdOutlineHeadphones,
  MdOutlineIosShare,
} from 'react-icons/md';
import { HiOutlineBookOpen } from 'react-icons/hi';
import api from 'services/api';
import * as S from './styles';

type Book = {
  title: string;
  subtitle: string;
  description: string;
  author: string;
  imageUrl: string;
};

export type ApiBook = {
  id: string;
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

  useEffect(() => {
    setCookie(undefined, 'last.book', JSON.stringify(id), {
      maxAge: 60 * 60 * 24,
      path: '/',
    });
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get<ApiBook>(`/volumes/${id}`);
        console.log({ id });

        const serializedBook = {
          title: data.volumeInfo.title,
          subtitle: data.volumeInfo.subtitle,
          description: data.volumeInfo.description,
          author: data.volumeInfo?.authors ? data.volumeInfo.authors[0] : '',
          imageUrl: data.volumeInfo.imageLinks?.thumbnail,
        };

        console.log({ serializedBook });

        setBook(serializedBook);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [id]);

  return (
    <S.Container>
      <S.BackButtonContainer>
        <button onClick={() => router.back()}>
          <MdArrowBack size={24} />
        </button>
      </S.BackButtonContainer>
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
          <S.Description
            dangerouslySetInnerHTML={{ __html: book?.description }}
          />
        </S.DescriptionContainer>
        <S.Menu>
          <button>
            <HiOutlineBookOpen size={20} color="#CFCBD2" /> Read
          </button>
          <button>
            <MdOutlineHeadphones size={20} color="#CFCBD2" /> Listen
          </button>
          <button>
            <MdOutlineIosShare size={20} color="#CFCBD2" /> Share
          </button>
        </S.Menu>
      </S.Content>
    </S.Container>
  );
};
