import React from 'react';
import { Link } from 'react-router-dom';
import { CenterNoHeight, Btn } from './styles';

export default function Button({ to, children }) {
  return (
    <CenterNoHeight>
      <Link to={to}>
        <Btn>{children}</Btn>
      </Link>
    </CenterNoHeight>
  );
}
