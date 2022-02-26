import React from "react";
import styled from "styled-components";

const CardEl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 2rem;
`;

const ImageContainer = styled.div`
  background-color: #8eb0b4;
  width: 90%;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
`;

const Describtion = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  cursor: pointer;
  padding-top: 0.4rem;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  transition: all 0.3s ease;
  :hover {
    transform: scale(1.1);
  }
`;
const ItemName = styled.h5`
  padding: 0.2rem;
`;
const ItemPrice = styled(ItemName)``;
const Card = ({ img, price, name, id }) => {
  return (
    <CardEl>
      <ImageContainer>
        <Img src={img} />
      </ImageContainer>
      <Describtion>
        <ItemName>{name}</ItemName>
        <ItemPrice>{price}</ItemPrice>
      </Describtion>
    </CardEl>
  );
};

export default Card;
