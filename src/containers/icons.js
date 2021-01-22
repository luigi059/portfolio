import React from 'react';
import { Icon } from '../components';
import * as ROUTES from '../constants/routes';

export default function IconContainer() {
  return (
    <Icon>
      <Icon.LinkedIn to={ROUTES.LINKED} />
      <Icon.GitHub to={ROUTES.GITHUB} />
    </Icon>
  );
}
