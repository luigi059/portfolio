import React from 'react';
import { Container, MainText, SubText, TM } from './styles/footer';

export default function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.MainText = function FooterMainText({ children, ...restProps }) {
  return <MainText {...restProps}>{children}</MainText>;
};

Footer.SubText = function FooterSubText({ children, ...restProps }) {
  return <SubText {...restProps}>{children}</SubText>;
};

Footer.TM = function FooterTM({ children, ...restProps }) {
  return <TM {...restProps}>{children}</TM>;
};
