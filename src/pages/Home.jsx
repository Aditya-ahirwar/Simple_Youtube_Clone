import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import VideoItem from '../components/VideoItem'

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/pageSlice'

const Container = styled.div`
  display: flex;
  gap : 10px;
  width : 295;
  flex-wrap: wrap;
`;

const Actions = styled.div`
height : 30px;
display : flex;
width : 100%;
gap : 10px;
// border : 2px solid red;
position : sticky;
top : 56px;
padding : 5px 0px;
background-color : white;
margin-bottom : 5px;

button {
  border : none;
  padding : 5px 20px;
  border-radius : 5px;
  font-size : 15px;
  font-weight : 500;
  cursor : pointer;
  :hover{
    background : black;
    color : white;
  }

}
`

const Home = () => {

  const page = useSelector((state) => state.page.value)
  const dispatch = useDispatch()
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, [page]);

  const fetchVideos = async () => {
    try {
      const response = await fetch(`https://internship-service.onrender.com/videos?page=${page}`);
      const data = await response.json();
      setVideos(data.data.posts);
      

      
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };


  return (
    <div >
    <Actions>
      <button onClick={() =>dispatch(decrement())}>Prev</button>
      <button onClick={() => dispatch(increment())}>Next</button>
      </Actions>
    <Container>
      {videos.map((video) => (
        <VideoItem key={video.postId} video={video}/>
      ))}
    </Container>

    </div>
  );
};

export default Home;