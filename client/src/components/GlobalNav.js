import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.div`
  display: flex;
  padding: 0 2.5%;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  width: 95%;
  color: white;
  background: rgba(67, 133,246, 1);
  box-shadow: 1px 1px 5px #000;
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  width: 10%;
  a {
    text-decoration: none;
    &:hover{
      border-bottom: 2px solid white;
    }
    &:active{
      color: white
    }
    &:visited{
      color: white
    }
  }
`;

class GlobalNav extends Component {
  render() {
    return (
      <Nav>
        <h1>Tunr</h1>
        <Links>
          <Link to="/">Artists</Link>
          <Link to="/signUp">Sign Up</Link>
        </Links>
      </Nav>
    );
  }
}

export default GlobalNav;
