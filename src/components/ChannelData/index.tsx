import React, { useRef, useEffect } from  'react';

import { Container, Message, InputWrapper, Input, InputIcon } from './styles';

import ChannelMessage, { Mention } from '../ChannelMessage';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef])

  return (
    <Container>
      <Message ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author='Willian Silva'
            date='10/07/2020'
            content='Finalizei o Discord' 
        />
        ))}
        
        
        <ChannelMessage
         author='Caio Luiz'
         date='10/07/2020'
         content={
           <>
           <Mention>@Guilherme Rodz</Mention>, Feliz aniversário e vlw pelo conteudo
           </>
         }
         hasMention
         isBot
        />
        
      </Message>

      <InputWrapper>
        <Input type='text' placeholder='Conversar em #chat-livre' />
        <InputIcon />
      </InputWrapper>
    </Container>
  )
};

export default ChannelData;
