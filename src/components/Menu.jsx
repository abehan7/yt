import React, { useState } from "react";
import styled from "styled-components";
const MenuEl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  padding: 0.4rem 0;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0.5rem;
  transition: 300ms;
  :hover {
    color: #add8af;
  }

  ${({ isClicked }) =>
    isClicked &&
    `
    color: #add8af;
  ::before {
    transform: translateY(250%);
    position: absolute;
    width: 6.5px;
    height: 6.5px;
    border-radius: 50%;
    background-color: #add8af;
    content: "";
    color: #add8af;
  }
  `}
`;

const items = ["All", "Winter", "Suit", "Summer", "Shoes"];

const Menu = () => {
  const [clickedNum, setClickedNum] = useState(0);
  const onClick = (index) => {
    clickedNum !== index && setClickedNum(index);
  };
  return (
    <MenuEl>
      {items.map((item, index) => {
        const isClicked = index === clickedNum;
        return (
          <Item
            key={index}
            onClick={() => onClick(index)}
            isClicked={isClicked}
          >
            {item}
          </Item>
        );
      })}
    </MenuEl>
  );
};

export default Menu;
