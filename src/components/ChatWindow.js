import React, { useState, useEffect , useRef} from 'react';
import styled from 'styled-components';
import Message from './Message';
import FormattedResponse from './FormattedResponse';

const ChatContainer = styled.div`
  flex: 1;
  overflow-y: scroll;
  padding: 1rem;
  background-color: #ffffff;
`;

const ChatWindow = ({ loading, prompt, result }) => {
  const [prompts, setPrompts] = useState([]);
  const [results, setResults] = useState(["Hello, how can I assist you today?"]);
  const chatContainerRef = useRef(null);

  // if(loading){
  //   results.push("Loading...");
  // } else {
  //   results.pop();
  // }

  useEffect(() => {
    if (prompt) {
      setPrompts((prevPrompts) => [...prevPrompts, prompt]);
      chatContainerRef.current?.scrollTo({
        top: chatContainerRef.current?.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [prompt]);
  
  useEffect(() => {
    if (result) {
      setResults((prevResults) => [...prevResults, result]);
      chatContainerRef.current?.scrollTo({
        top: chatContainerRef.current?.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [result]);
  

  const mergedArray = [];
  const maxLength = Math.max(prompts.length, results.length);

  for (let i = 0; i < maxLength; i++) {
    if (i < results.length) {
      mergedArray.push({ text: results[i], isUser: false });
    }
    if (i < prompts.length) {
      mergedArray.push({ text: prompts[i], isUser: true });
    }
  }

  return (
    <ChatContainer>
      {mergedArray.map((item, index) => (
        item.isUser
        ? <Message key={index} isUser={item.isUser} text={item.text} />
        // : <Message key={index} isUser={item.isUser} text={item.text} />
        : <FormattedResponse key={index} response={item.text} />
      ))}
      {loading && <Message text="Loading..." />}
    </ChatContainer>
  );
};

export default ChatWindow;
