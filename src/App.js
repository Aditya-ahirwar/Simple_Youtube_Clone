import { useState } from "react";
import styled from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Video from "./pages/Video";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const Container = styled.div`
  display: flex;
  font-family: 'Roboto', sans-serif;
`;

const Main = styled.div`
  flex: 5;
  // border : 2px solid red;
  // background-color: white;
`;
const Wrapper = styled.div`
  padding: 20px 20px;
`;

function App() {
  return (
      <Container>
        <BrowserRouter>
          <Menu/>
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element={<Home />} />
                  <Route path="video">
                    <Route path=":id" element={<Video />} />
                  </Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
  );
}

export default App;