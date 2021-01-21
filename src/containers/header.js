import React from 'react';
import { Header } from '../components';

export default function HeaderContainer() {
  return (
    <Header>
      <Header.Content>
        <Header.MainText>LUIGI MARK FERNANDEZ</Header.MainText>
        <Header.SubText>FULL STACK PROGRAMMER</Header.SubText>
        <Header.Button>See Projects</Header.Button>
      </Header.Content>
      <Header.Video src="/videos/ArcticWaves.mp4" />
    </Header>
  );
}
