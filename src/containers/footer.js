import React from 'react';
import { Footer, Center } from '../components';
import IconContainer from './icons';

export default function FooterContainer() {
  return (
    <>
      <Footer>
        <Center>
          <Footer.MainText>LIKE WHAT YOU SEE?</Footer.MainText>
          <Footer.SubText>Please feel free to contact me, my inbox is always open</Footer.SubText>
          <IconContainer />
        </Center>
      </Footer>
      <Footer.TM>
        <Center>&#169;Luigi Mark Fernandez. This website was built with ReactJS</Center>
      </Footer.TM>
    </>
  );
}
