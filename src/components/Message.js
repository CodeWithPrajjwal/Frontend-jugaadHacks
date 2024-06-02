import React from 'react';
import styled, { css } from 'styled-components';

const MessageContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
  ${({ $isUser }) =>
    $isUser
      ? css`
          justify-content: flex-end;
        `
      : css`
          justify-content: flex-start;
        `}
`;

const MessageBubble = styled.div`
  max-width: 60%;
  padding: 0.5rem 1rem;
  border-radius: 15px;
  @media (max-width: 768px) {
    max-width: 80%;
  }
  ${({ $isUser }) =>
    $isUser
      ? css`
          background-color: #0084ff;
          color: white;
        `
      : css`
          background-color: #e5e5ea;
          color: black;
        `}
`;

const Message = ({ isUser, text }) => {
  return (
    <MessageContainer $isUser={isUser}>
      <MessageBubble $isUser={isUser}>{text}</MessageBubble>
    </MessageContainer>
  );
};

export default Message;
