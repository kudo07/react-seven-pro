import React from "react";
import { GiFullPizza } from "react-icons/gi";
import { PiHamburgerFill } from "react-icons/pi";
import { GiNoodles } from "react-icons/gi";
import { GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
// import { Navlink } from "react-router-dom";
import { NavLink } from "react-router-dom";
function Category() {
  return (
    <List>
      {/* its big no no for anchor tags as they refres the links only for absolute path is yes for anchor tags in react */}
      <Slink to={"/cuisine/Italian"}>
        <GiFullPizza />
        <h4>Italian</h4>
      </Slink>

      <Slink to={"/cuisine/American"}>
        <PiHamburgerFill />
        <h4>American</h4>
      </Slink>
      <Slink to={"/cuisine/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </Slink>
      <Slink to={"/cuisine/Japanese"}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </Slink>
    </List>
  );
}
const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;
const Slink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  text-decoration: none;
  background: linear-gradient(35deg, #000000, black);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale() (0.8);

  h4 {
    color: aliceblue;
    font-size: 0.8rem;
  }
  svg {
    color: aliceblue;
    font-size: 1.5rem;
  }
  &.active {
    background: linear-gradient(to right, orange, orangered);

    svg {
      color: azure;
    }
    h4 {
      color: aliceblue;
    }
  }
`;

export default Category;
