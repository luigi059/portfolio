import React from 'react';
import { Video, Container, MainText, SubText, Icons, Button } from './styles/header';

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

Header.MainText = function HeaderMainText({ children, ...restProps }) {
  return <MainText {...restProps}>{children}</MainText>;
};
Header.SubText = function HeaderSubText({ children, ...restProps }) {
  return <SubText {...restProps}>{children}</SubText>;
};
Header.Icons = function HeaderIcons({ children, ...restProps }) {
  return <Icons {...restProps}>{children}</Icons>;
};
Header.Button = function HeaderButton({ children, prop, ...restProps }) {
  const executeScroll = () => prop.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  return (
    <Button onClick={executeScroll} {...restProps}>
      {children}
    </Button>
  );
};
