import Link from 'next/link';
import { VscHome } from 'react-icons/vsc';
import { RiBookLine } from 'react-icons/ri';
import { MdPersonOutline } from 'react-icons/md';

import * as S from './styles';

export const Menu = () => {
  return (
    <S.Container>
      <Link href="/">
        <a className="active">
          <VscHome size={20} />
          Home
        </a>
      </Link>
      <Link href="#">
        <a>
          <RiBookLine size={20} />
          Library
        </a>
      </Link>
      <Link href="#">
        <a>
          <MdPersonOutline size={20} />
          Profile
        </a>
      </Link>
    </S.Container>
  );
};
