import React from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";

import styled from "styled-components";
const HeaderEl = styled.div``;
const IconContaner = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Icon = styled.div`
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0.5rem;
  margin: 0.4rem;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 2rem;
  transition: 200ms;
  :hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const TitleWrapper = styled.div`
  padding-bottom: 1rem;
`;
const Title = styled.h3`
  cursor: pointer;
`;

const Header = () => {
  return (
    <HeaderEl>
      <IconContaner>
        <Icon>
          <AiOutlineMenu />
        </Icon>
        <Icon>
          <AiOutlineSearch />
        </Icon>
      </IconContaner>
      <TitleWrapper>
        <Title>
          Man's <br />
          Best <br />
          Collection
        </Title>
      </TitleWrapper>
    </HeaderEl>
  );
};

export default Header;
