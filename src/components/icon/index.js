import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import HttpIcon from '@material-ui/icons/Http';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import { Link } from 'react-router-dom';
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
    marginRight: '3rem',
  };
  return (
    <a href={to}>
      <GitHubIcon style={style} />
    </a>
  );
};

Icon.Web = function IconWeb({ to }) {
  const style = {
    color: 'white',
    fontSize: '5rem',
    cursor: 'pointer',
    marginRight: '3rem',
  };
  return (
    <a href={to}>
      <HttpIcon style={style} />
    </a>
  );
};

Icon.Pdf = function IconPdf({ to }) {
  const style = {
    color: 'white',
    fontSize: '5rem',
    cursor: 'pointer',
  };
  return (
    <Link to={to}>
      <PictureAsPdfIcon style={style} />
    </Link>
  );
};
