import React from 'react';
import HeaderContainer from '../containers/header';
import FooterContainer from '../containers/footer';
import AboutContainer from '../containers/about';
import ProjectContainer from '../containers/project';

export default function Home() {
  return (
    <>
      <HeaderContainer />
      <AboutContainer />
      <ProjectContainer />
      <FooterContainer />
    </>
  );
}
