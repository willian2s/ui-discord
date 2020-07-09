import React from  'react';

import { Container, Category, AddCategoryIcon } from './styles';

import ChannelButton from '../ChannelButton';

const ChanneList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="chat-livre" selected/>
      <ChannelButton channelName="trabalho"/>
      <ChannelButton channelName="GTA-RP"/>
      <ChannelButton channelName="CSGO"/>
      <ChannelButton channelName="COD-WarZone"/>
    </Container>
  )
};

export default ChanneList;
