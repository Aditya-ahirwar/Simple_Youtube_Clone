import React from "react";
import styled from "styled-components";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import YouTube from "../logo.png";
import { Link } from "react-router-dom";


const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: white;
  height: 56px;
  // width : 100vw;
  box-sizing : border-box;
  // border : 2px solid red;

`;

const Wrapper = styled.div`
// border : 2px solid red;
  display: flex;
  flex-direction : row;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0px 20px;
`;
const Logo = styled.div`
  display: flex;
  // border : 2px solid red;
  align-items: center;
  justify-content : flex-start;
  gap: 5px;
  font-size : 20px;
  font-family: 'Anton', sans-serif;
  p{
    @media (max-width: 625px) {
      display : none;
    }
  }
`;

const Img = styled.img`
  height: 30px;
  @media (max-width: 625px) {
    height : 50px;
  }
`;

const Search = styled.div`
  width: 40%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 10px;
  color: black;
  @media (max-width: 625px) {
    width : 75%;
  }
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  color: black;

`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;

  @media (max-width: 625px) {
    display : none;
  }
`;


const Navbar = () => {

  return (
    <>
      <Container>
        <Wrapper>
        <Link to='/' style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src={YouTube} />
            <p>YouTube</p>
          </Logo>
          </Link>
          <Search>
            <Input placeholder="Search" />
            <SearchOutlinedIcon/>
          </Search>
            <Button>
              <AccountCircleOutlinedIcon />
              SIGN IN
            </Button>
        </Wrapper>
      </Container>
    </>
  );
};

export default Navbar;