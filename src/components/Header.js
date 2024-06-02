import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: #202123;
  color: white;
  padding: 1rem;
  text-align: center;
`;

const Header = ({summary}) => {
  console.log('Header summary: ', summary);
  return (
    <HeaderContainer>
      {summary}
    </HeaderContainer>
  );
};

export default Header;
