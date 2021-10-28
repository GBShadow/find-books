import Link from 'next/link';
import * as S from './styles';

export const Home = () => {
  return (
    <S.Container>
      <S.Welcome>
        <h1>
          Hi, <span>Gustavo Sombra</span> 👋
        </h1>
      </S.Welcome>
      <S.Section>
        <S.Header>
          <strong>Discover new book</strong>
          <div>
            <Link href="#">
              <a>More</a>
            </Link>
          </div>
        </S.Header>
        <S.Content>
          <S.Box>
            <S.Info>
              {/* <S.BackgroundImage>
                <img src="/oval-left.png" />
              </S.BackgroundImage> */}
              <strong>Hooked</strong>
              <span>Nir Eyal</span>
              <div>
                <img src="chart.svg" />
                <p>
                  <strong>120+</strong> Read Now
                </p>
              </div>
            </S.Info>
            <S.BookImage>
              <S.FormsImage />
              <S.Cover>
                <img src="book-1.png" />
              </S.Cover>
            </S.BookImage>
          </S.Box>
          <S.Box>
            <S.Info>
              {/* <S.BackgroundImage>
                <img src="/oval-left.png" />
              </S.BackgroundImage> */}
              <strong>The One </strong>
              <span>Garry Keller</span>
              <div>
                <img src="chart.svg" />
                <p>
                  <strong>90+</strong> Read Now
                </p>
              </div>
            </S.Info>
            <S.BookImage>
              <S.FormsImage />
              <S.Cover className="cover2">
                <img src="book-3.jpg" />
              </S.Cover>
            </S.BookImage>
          </S.Box>
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
            <div>
              <img src="book-2.png" />
            </div>
          </S.CurrentlyBook>
          <S.InfoBook>
            <div>
              <strong>Originals</strong>
              <span>by Adam Grant</span>
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
        </S.LastVideos>
      </S.Section>
    </S.Container>
  );
};
