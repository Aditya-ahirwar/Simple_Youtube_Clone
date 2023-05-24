import React from "react";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";


const Container = styled.div`
  background-color:white;
  height: 580px; 
  color: black;
  font-size: 14px;
  // border : 2px solid red;
  flex : 1;
  position : sticky;
  top : 56px;

  @media (max-width: 625px) {
    display : none;
  }
`;
const Wrapper = styled.div`
  // padding: 18px 26px;
`;


const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 8px 0px;
  padding-left : 26px;
  cursor : pointer;
  :hover{
    background : #f0f0f0;
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 1px solid #f2f2f2;
`;

const Login = styled.div`
padding-left : 26px;
`;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 5px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Title = styled.h2`
  font-size: 14px;
  color: black;
  margin-bottom: 20px;
  padding-left : 26px;
`;

const Menu = () => {

  return (
    <Container>
      <Wrapper>
        <Link to='/' style={{ textDecoration: "none", color: "inherit" }}>
        <Item>
          <HomeIcon />
          Home
        </Item>
        </Link>
         <Item>
            <ExploreOutlinedIcon />
            Explore
          </Item>
          <Item>
            <SubscriptionsOutlinedIcon />
            Subscriptions
          </Item>
        <Hr />
        <Item>
          <VideoLibraryOutlinedIcon />
          Library
        </Item>
        <Item>
          <HistoryOutlinedIcon />
          History
        </Item>
        <Hr />
            <Login>
              Sign in to like videos, comment, and subscribe.
                <Button>
                  <AccountCircleOutlinedIcon />
                  SIGN IN
                </Button>
            </Login>
          <Hr />
        <Title>Explore</Title>
        <Item>
          <LibraryMusicOutlinedIcon />
          Music
        </Item>
        <Item>
          <SportsBasketballOutlinedIcon />
          Sports
        </Item>
        <Item>
          <SportsEsportsOutlinedIcon />
          Gaming
        </Item>
        <Item>
          <MovieOutlinedIcon />
          Movies
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;