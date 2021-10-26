import { Book } from 'components/Book';
import Link from 'next/link';
import { MdOutlineImageNotSupported } from 'react-icons/md';
import * as S from './styles';

type Book = {
  id: string;
  title: string;
  author: string;
  imageUrl: string;
};

type BooksProps = {
  books: Book[];
  loading: boolean;
};

export const Books = ({ books, loading }: BooksProps) => {
  return (
    <S.Container>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        books?.map((book, index) => (
          <Book book={book} key={`${index}-${book.id}`} />
        ))
      )}
    </S.Container>
  );
};
