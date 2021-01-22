import React from 'react';
import { Header, Center } from '../components';
import IconContainer from './icons';

export default function HeaderContainer() {
  return (
    <Header>
      <Center>
        <Header.MainText>LUIGI MARK FERNANDEZ</Header.MainText>
        <Header.SubText>FULL STACK PROGRAMMER</Header.SubText>
        <IconContainer />
        <Header.Button>See Projects</Header.Button>
      </Center>
      <Header.Video src="/videos/ArcticWaves.mp4" />
    </Header>
  );
}
