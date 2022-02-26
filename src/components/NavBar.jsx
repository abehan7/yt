import React from "react";
import { AiOutlineBell, AiOutlineHome } from "react-icons/ai";
import { IoBagCheckOutline } from "react-icons/io5";
import { MdPersonOutline } from "react-icons/md";

import styled from "styled-components";
const NavBarEl = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 60px;
  position: absolute;
  bottom: 0;
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 80%;
  border-radius: 15px;
  background-color: #add8af;
  column-gap: 2rem;
`;
const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  font-size: 1.4rem;
  border-radius: 15px;
  transition: 200ms;
  cursor: pointer;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background-color: #60aa61;
  }
`;

const NavBar = () => {
  return (
    <NavBarEl>
      <NavWrapper>
        <Icon>
          <AiOutlineHome />
        </Icon>
        <Icon>
          <IoBagCheckOutline />
        </Icon>
        <Icon>
          <AiOutlineBell />
        </Icon>
        <Icon>
          <MdPersonOutline />
        </Icon>
      </NavWrapper>
    </NavBarEl>
  );
};

export default NavBar;
