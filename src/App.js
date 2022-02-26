import { memo, useCallback, useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Item from "./Item";
import Loader from "./Loader";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
  }

  body {
    background-color: #f2f5f7;
  }
`;

const AppWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;

  .Target-Element {
    width: 100vw;
    height: 140px;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
`;

const Items = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
];

const App = () => {
  const [target, setTarget] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [itemNum, setItemNum] = useState(1);

  useEffect(() => {
    console.log(itemNum);
  }, [itemNum]);

  const getMoreItem = async () => {
    setIsLoaded(true);
    await new Promise((resolve) => setTimeout(resolve, 100));
    setItemNum((num) => num + 10);
    setIsLoaded(false);
  };

  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting && !isLoaded) {
      observer.unobserve(entry.target);
      if (itemNum > Items.length) {
        // setIsLoaded(false);
        return;
      }
      await getMoreItem();
      observer.observe(entry.target);
    }
  };

  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.4,
      });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target]);

  return (
    <>
      <GlobalStyle />
      <AppWrap>
        {Items.slice(0, itemNum).map((v, i) => {
          return <Item number={i + 1} key={i} />;
        })}

        {itemNum < Items.length && (
          <div ref={setTarget} className="Target-Element">
            {isLoaded && <Loader />}
          </div>
        )}
      </AppWrap>
    </>
  );
};

export default memo(App);
