import React, { useRef } from 'react';
import HeaderContainer from '../containers/header';
import FooterContainer from '../containers/footer';
import AboutContainer from '../containers/about';
import ProjectContainer from '../containers/project';

export default function Home() {
  const scroll = useRef(null);
  return (
    <>
      <HeaderContainer prop={scroll} />
      <AboutContainer />
      <ProjectContainer prop={scroll} />
      <FooterContainer />
    </>
  );
}
