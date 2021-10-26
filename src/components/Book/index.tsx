import Link from 'next/link';
import { MdOutlineImageNotSupported } from 'react-icons/md';
import * as S from './styles';

type BookType = {
  id: string;
  title: string;
  author: string;
  imageUrl: string;
};

type BooksProps = {
  book: BookType;
};

export const Book = ({ book }: BooksProps) => {
  const { id, title, imageUrl, author } = book;

  return (
    <Link href={`/details/${id}`}>
      <S.Book>
        <div>
          {imageUrl ? (
            <img src={imageUrl} alt={`Cover of ${title} book`} />
          ) : (
            <>
              <MdOutlineImageNotSupported size={40} />
              <span>No Image</span>
            </>
          )}
        </div>
        <S.Title>{`${title.slice(0, 30)}...`}</S.Title>
        <S.Author>{author && `by ${author.slice(0, 14)}...`}</S.Author>
      </S.Book>
    </Link>
  );
};
