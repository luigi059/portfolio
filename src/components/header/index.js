import React from 'react';
import { Video, Container, Content, MainText, SubText, Icons, Button } from './styles/header';

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
Header.Video = function HeaderVideo({ src }) {
  return (
    <Video>
      <video autoPlay muted loop>
        <source src={src} type="video/mp4" />
      </video>
    </Video>
  );
};

Header.Content = function HeaderContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};

Header.MainText = function HeaderMainText({ children, ...restProps }) {
  return <MainText {...restProps}>{children}</MainText>;
};
Header.SubText = function HeaderSubText({ children, ...restProps }) {
  return <SubText {...restProps}>{children}</SubText>;
};
Header.Icons = function HeaderIcons({ children, ...restProps }) {
  return <Icons {...restProps}>{children}</Icons>;
};
Header.Button = function HeaderButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
