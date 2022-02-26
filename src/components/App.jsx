import "./App.css";
import styled from "styled-components";
import Header from "./Header";
import Menu from "./Menu";
import Contents from "./Contents";
import NavBar from "./NavBar";

const AppEl = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  > div {
    width: 100%;
  }
`;
function App() {
  return (
    <AppEl className="App">
      <Header />
      <Menu />
      <Contents />
      <NavBar />
    </AppEl>
  );
}

export default App;
