import "./App.css";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Pages from "./pages/Pages";
import Search from "./components/Search";
import Searched from "./pages/Searched";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { GiFoodTruck } from "react-icons/gi";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiFoodTruck />
          <Logo to={"/"}>delicioussss</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
        {/* <Searched /> */}
      </BrowserRouter>
    </div>
  );

  // return fetch('spponcular.com/api&key="process.env."');
}
const Logo = styled(Link)`
  text-decoration: none;
  margin-right: 70%;
  /* margin-top: 10%; */
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
  /* font-family:cursive; */
`;
const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  justify-content: center;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;
export default App;
