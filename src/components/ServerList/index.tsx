import React from 'react';

import ServerButton from '../ServerButton';

import { Container, Separator } from './styles';

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome hasNotification mentions={5} />

      <Separator />

      <ServerButton />
      <ServerButton hasNotification />
      <ServerButton hasNotification mentions={3} />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton hasNotification mentions={40} />
      <ServerButton />
      <ServerButton hasNotification />
      <ServerButton />
      <ServerButton />
      <ServerButton hasNotification />
    </Container>
  )
};

export default ServerList;
