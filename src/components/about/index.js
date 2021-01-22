import React from 'react';
import { Container, Content, Title, TextArea, SubTitle, Text, PicArea, Picture } from './styles/about';

export default function About({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

About.Content = function AboutContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};

About.TextArea = function AboutTextArea({ children, ...restProps }) {
  return <TextArea {...restProps}>{children}</TextArea>;
};

About.Title = function AboutTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

About.SubTitle = function AboutSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

About.Text = function AboutText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

About.PicArea = function AboutPicArea({ children, ...restProps }) {
  return <PicArea {...restProps}>{children}</PicArea>;
};

About.Picture = function AboutPicture({ src, style, ...restProps }) {
  return <Picture src={src} alt="" />;
};
