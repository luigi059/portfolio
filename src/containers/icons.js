import React from 'react';
import { Icon } from '../components';

export default function IconContainer() {
  return (
    <Icon>
      <Icon.LinkedIn to="https://www.linkedin.com/in/luigimarkfernandez" />
      <Icon.GitHub to="https://github.com/luigi059" />
      <Icon.Pdf to="/cv" />
    </Icon>
  );
}
