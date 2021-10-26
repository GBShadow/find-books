import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { IconBaseProps } from 'react-icons';

import * as S from './styles';

type InputProps = {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ name, icon: Icon, ...rest }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <S.Container>
      {Icon && <Icon size={20} />}
      <input {...rest} ref={inputRef} />
    </S.Container>
  );
};
