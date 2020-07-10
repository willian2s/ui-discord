import React from  'react';

import { Container, Message, InputWrapper, Input, InputIcon } from './styles';
import ChannelMessage from '../ChannelMessage';

const ChannelData: React.FC = () => {
  return (
    <Container>
      <Message>
        <ChannelMessage
         author='Willian Silva'
         date='10/07/2020'
         content='Finalizei o Discord' 
        />
        
        {/* <ChannelMessage
         author='Willian Silva'
         date='10/07/2020'
         content={
           <Mention>@Guilherme Rodz</Mention>, Feliz aniversário e vlw pelo conteudo
         }
         hasMention
         isBot
        /> */}
        
      </Message>

      <InputWrapper>
        <Input type='text' placeholder='Conversar em #chat-livre' />
        <InputIcon />
      </InputWrapper>
    </Container>
  )
};

export default ChannelData;
