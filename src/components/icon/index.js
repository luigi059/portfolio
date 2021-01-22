import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Container } from './styles/icon';

export default function Icon({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Icon.LinkedIn = function IconLinkedIn({ to }) {
  const style = {
    color: 'white',
    fontSize: '5rem',
    cursor: 'pointer',
    marginRight: '3rem',
  };
  return (
    <a href={to}>
      <LinkedInIcon style={style} />
    </a>
  );
};

Icon.GitHub = function IconGitHub({ to }) {
  const style = {
    color: 'white',
    fontSize: '5rem',
    cursor: 'pointer',
  };
  return (
    <a href={to}>
      <GitHubIcon style={style} />
    </a>
  );
};
