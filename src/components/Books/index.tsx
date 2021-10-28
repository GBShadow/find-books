import { Book } from 'components/Book';
import { VscLoading } from 'react-icons/vsc';
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
        <S.Loading>
          <VscLoading size={32} color="#4ABDF1" />
        </S.Loading>
      ) : (
        books?.map((book, index) => (
          <Book book={book} key={`${index}-${book.id}`} />
        ))
      )}
    </S.Container>
  );
};
