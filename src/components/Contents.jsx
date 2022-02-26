import React from "react";
import styled from "styled-components";
import Card from "./Card";
const ContentsEl = styled.div`
  height: calc(100% - 230px);
  padding-bottom: 1rem;
  display: grid;
  overflow-y: scroll;
  grid-template-columns: repeat(2, 1fr);
  > div:nth-child(even) {
    transform: translateY(10%);
  }
`;

const clothes = [
  {
    img: "https://image.msscdn.net/images/goods_img/20200806/1539029/1539029_1_500.jpg",
    price: "69,900원",
    name: "아디브레이크 팬츠",
    id: "89321y190a",
  },
  {
    img: "https://image.msscdn.net/images/goods_img/20210329/1867950/1867950_1_500.jpg",
    price: "24,900원",
    name: "커밋 티",
    id: "89321y190b",
  },
  {
    img: "https://image.msscdn.net/images/goods_img/20200806/1539029/1539029_1_500.jpg",
    price: " 69,900원",
    name: "아디브레이크 팬츠",

    id: "89321y190c",
  },
  {
    img: "https://image.msscdn.net/images/goods_img/20200806/1539029/1539029_1_500.jpg",
    price: " 69,900원",
    name: "아디브레이크 팬츠",

    id: "89321y190d",
  },
  {
    img: "https://image.msscdn.net/images/goods_img/20200806/1539029/1539029_1_500.jpg",
    price: " 69,900원",
    name: "아디브레이크 팬츠",

    id: "89321y190d",
  },
  {
    img: "https://image.msscdn.net/images/goods_img/20200806/1539029/1539029_1_500.jpg",
    price: " 69,900원",
    name: "아디브레이크 팬츠",

    id: "89321y190d",
  },
  {
    img: "https://image.msscdn.net/images/goods_img/20200806/1539029/1539029_1_500.jpg",
    price: " 69,900원",
    name: "아디브레이크 팬츠",

    id: "89321y190d",
  },
  {
    img: "https://image.msscdn.net/images/goods_img/20200806/1539029/1539029_1_500.jpg",
    price: " 69,900원",
    name: "아디브레이크 팬츠",

    id: "89321y190d",
  },
  {
    img: "https://image.msscdn.net/images/goods_img/20200806/1539029/1539029_1_500.jpg",
    price: " 69,900원",
    name: "아디브레이크 팬츠",

    id: "89321y190d",
  },
];

const Contents = () => {
  return (
    <ContentsEl>
      {clothes.map((clothes) => {
        return <Card {...clothes} />;
      })}
    </ContentsEl>
  );
};

export default Contents;
