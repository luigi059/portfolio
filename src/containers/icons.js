import React from 'react';
import { Icon } from '../components';

export default function IconContainer() {
  return (
    <Icon>
      <Icon.LinkedIn to="https://www.linkedin.com/in/luigi-mark-fernandez-277a53179/" />
      <Icon.GitHub to="https://github.com/luigi059" />
    </Icon>
  );
}
