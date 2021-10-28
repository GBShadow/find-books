import Link from 'next/link';
import { VscHome } from 'react-icons/vsc';
import { RiBookLine } from 'react-icons/ri';
import { MdPersonOutline } from 'react-icons/md';

import * as S from './styles';
import ActiveLink from 'components/ActiveLink';

export const Menu = () => {
  return (
    <S.Container>
      <ActiveLink activeClassName="active" href="/">
        <a className="active">
          <VscHome size={20} />
          Home
        </a>
      </ActiveLink>
      <ActiveLink activeClassName="active" href="#">
        <a>
          <RiBookLine size={20} />
          Library
        </a>
      </ActiveLink>
      <ActiveLink activeClassName="active" href="#">
        <a>
          <MdPersonOutline size={20} />
          Profile
        </a>
      </ActiveLink>
    </S.Container>
  );
};
