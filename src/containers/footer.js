import React from 'react';
import { Footer, Center } from '../components';
import IconContainer from './icons';

export default function FooterContainer() {
  return (
    <Footer>
      <Center>
        <Footer.MainText>LIKE WHAT YOU SEE?</Footer.MainText>
        <Footer.SubText>Please feel free to contact me, my inbox is always open</Footer.SubText>
        <IconContainer />
      </Center>
    </Footer>
  );
}
