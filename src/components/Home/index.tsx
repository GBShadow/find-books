import Link from 'next/link';
import { useEffect, useState } from 'react';
import { parseCookies } from 'nookies';
import * as S from './styles';
import api from 'services/api';
import { ApiBooks } from 'components/ListBooks';
import { MdOutlineImageNotSupported } from 'react-icons/md';
import { ApiBook } from 'components/Details';
import { defaultBook, defaultBooks } from 'helpers/defaultBooks';

type Book = {
  id: string;
  title: string;
  author: string;
  imageUrl: string;
  reading?: number;
};

export const Home = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [currently, setCurrently] = useState<Book>();

  useEffect(() => {
    (async () => {
      const { 'search.query': queryInCookie } = parseCookies();

      if (
        queryInCookie === '""' ||
        queryInCookie === 'undefined' ||
        queryInCookie === undefined
      ) {
        setBooks(defaultBooks);

        return;
      }

      const query = JSON.parse(queryInCookie);

      const { data } = await api.get<ApiBooks>(
        `/volumes?q=${query}&maxResults=12&orderBy=newest`
      );

      const serializedBooks = data.items.map(item => {
        const [firstPart, secondPart] = item.volumeInfo.title.split(' ');

        const title =
          firstPart.length <= 3 ? `${firstPart} ${secondPart}` : firstPart;

        return {
          id: item.id,
          title,
          author: item.volumeInfo.authors ? item.volumeInfo.authors[0] : '',
          imageUrl: item.volumeInfo?.imageLinks?.thumbnail,
          reading: Math.floor(Math.random() * 300 + 50),
        };
      });

      setBooks(serializedBooks);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const { 'last.book': lastBook } = parseCookies();

      if (
        lastBook === '""' ||
        lastBook === 'undefined' ||
        lastBook === undefined
      ) {
        setCurrently(defaultBook);
        return;
      }

      const id = JSON.parse(lastBook);

      const { data } = await api.get<ApiBook>(`/volumes/${id}`);

      const [firstPart, secondPart] = data.volumeInfo.title.split(' ');

      const serializedBook = {
        id: data.id,
        title: `${firstPart} ${secondPart ? secondPart : ''}`,
        description: data.volumeInfo.description,
        author: data.volumeInfo?.authors ? data.volumeInfo.authors[0] : '',
        imageUrl: data.volumeInfo.imageLinks?.thumbnail,
      };

      setCurrently(serializedBook);
    })();
  }, []);

  return (
    <S.Container>
      <S.Welcome>
        <h1>
          Hi, <span>Gustavo Sombra</span> 👋
        </h1>
      </S.Welcome>
      <S.Section>
        <img src="oval-right.png" />
        <S.Header>
          <strong>Discover new book</strong>
          <div>
            <Link href="#">
              <a>More</a>
            </Link>
          </div>
        </S.Header>
        <S.Content>
          {books?.map((book, index) => {
            const variant = (index + 1) % 2 === 0 ? true : false;

            return (
              <S.Box key={`${book.id}-${index}`} className={variant && 'box2'}>
                <S.BackgroundImage>
                  <img src="/oval-left.png" />
                </S.BackgroundImage>
                <S.Info>
                  <strong>{book.title}</strong>
                  <span>{book.author}</span>
                  <div>
                    <img src="chart.svg" />
                    <p>
                      <strong>{book.reading}+</strong> Read Now
                    </p>
                  </div>
                </S.Info>
                <S.BookImage>
                  <Link href={`/details/${book.id}`}>
                    <a>
                      <S.FormsImage />
                      <S.Cover className={variant && 'cover2'}>
                        {book.imageUrl ? (
                          <img src={book.imageUrl} />
                        ) : (
                          <>
                            <MdOutlineImageNotSupported size={20} />
                            <span>No Image</span>
                          </>
                        )}
                      </S.Cover>
                    </a>
                  </Link>
                </S.BookImage>
              </S.Box>
            );
          })}
        </S.Content>
      </S.Section>
      <S.Section>
        <S.Header>
          <strong>Currently Reading</strong>
          <div>
            <Link href="#">
              <a>All</a>
            </Link>
          </div>
        </S.Header>
        <S.Content2>
          <S.CurrentlyBook>
            <Link href={`/details/${currently?.id}`}>
              <a>
                <img src={currently?.imageUrl} />
              </a>
            </Link>
          </S.CurrentlyBook>
          <S.InfoBook>
            <div>
              <strong>{currently?.title}</strong>
              <span>by {currently?.author}</span>
              <div>
                <img src="bookmark.svg" />
                <p>
                  Chapter <span>2</span> From 9
                </p>
              </div>
            </div>
            <img src="background-section-2.png" />
          </S.InfoBook>
        </S.Content2>
      </S.Section>
      <S.Section>
        <S.Header>
          <strong>Reviews of The Days</strong>
          <div>
            <Link href="#">
              <a>All Video</a>
            </Link>
          </div>
        </S.Header>
        <S.LastVideos>
          <S.Video>
            <S.ImageVideo>
              <img src="image-video.png" />
            </S.ImageVideo>
            <S.InfoVideo>
              <strong>Don’t Make Me Think - Steve Krug</strong>
              <ul>
                <li>Jesse Showalter </li>
                <li>5.2K Views </li>
                <li>1 Week ago</li>
              </ul>
              <p>
                "Don't Make Me Think" by Steve Krug is one of the first books I
                read when I was getting into digital design. It helped me move
                from designing things that just "look nice" to designing things
                that are usable, useful, memorable and simple to learn and use.{' '}
              </p>
            </S.InfoVideo>
          </S.Video>
          <S.Video>
            <S.ImageVideo>
              <img src="image-video.png" />
            </S.ImageVideo>
            <S.InfoVideo>
              <strong>Don’t Make Me Think - Steve Krug</strong>
              <ul>
                <li>Jesse Showalter </li>
                <li>5.2K Views </li>
                <li>1 Week ago</li>
              </ul>
              <p>
                "Don't Make Me Think" by Steve Krug is one of the first books I
                read when I was getting into digital design. It helped me move
                from designing things that just "look nice" to designing things
                that are usable, useful, memorable and simple to learn and use.{' '}
              </p>
            </S.InfoVideo>
          </S.Video>
        </S.LastVideos>
      </S.Section>
    </S.Container>
  );
};
