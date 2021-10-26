import Link from 'next/link';
import { Input } from 'components/Input';
import { Menu } from 'components/Menu';
import { useSearch } from 'hook/useSearch';
import { ReactElement } from 'react';
import { VscSearch } from 'react-icons/vsc';
import * as S from './styles';

type LayoutProps = {
  children: ReactElement;
  home?: boolean;
};

export const Layout = ({ children, home }: LayoutProps) => {
  const { getQuery } = useSearch();

  return (
    <S.Container>
      {home ? (
        <Link href="/search-books">
          <a>
            <Input
              name="search"
              placeholder="Search book"
              icon={VscSearch}
              onChange={e => getQuery(e.target.value)}
            />
          </a>
        </Link>
      ) : (
        <Input
          name="search"
          placeholder="Search book"
          icon={VscSearch}
          onChange={e => getQuery(e.target.value)}
        />
      )}
      {children}
      <Menu />
    </S.Container>
  );
};
