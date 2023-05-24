import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { useDispatch } from 'react-redux'
import { setVideo } from '../redux/videoSlice'

const Container = styled.div`
  width: 200px;
  height : 400px;
  margin-bottom:  25px;
  cursor: pointer;
  display: flex;
  flex-direction : column;
  border-radius : 5px;
  overflow : hidden;

  -webkit-box-shadow: 2px 2px 15px -1px rgba(219,215,219,1);
  -moz-box-shadow: 2px 2px 15px -1px rgba(219,215,219,1);
  box-shadow: 2px 2px 15px -1px rgba(219,215,219,1);
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  background-color: #999;
  flex: 3;
  object-fit : cover;
  
`;

const Details = styled.div`
  display: flex;
  margin-top: 8px;
  gap: 12px;
  flex: 1;
  // margin-left : 4px;
  padding : 2px 5px;
  align-items : flex-start;
//   border : 2px solid red;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
//   border : 2px solid red;
`;

const Texts = styled.div`
// border : 2px solid red;
display : flex;
flex-direction : column;
justify-content : flex-start;

`;

const Title = styled.text`
font-size: 16px;
font-weight: 500;
color : black
// border : 2px solid red;

`;

const ChannelName = styled.h3`
  font-size: 14px;
  margin: 4px 0px;
  color : #606060;
`;

const Info = styled.div`
  color : #606060;
  font-size: 12px;
`;

const VideoItem = ({video}) => {
  // const CurrVideo = useSelector((state) => state.video.video)
  const dispatch = useDispatch()
  if(!video){ return;}
  // console.log(CurrVideo);

  return (
    <Link to={`/video/${video.postId}`} style={{ textDecoration: "none" }}>
      <Container onClick={() => dispatch(setVideo(video))}>
        <Image
          
          src={video.submission.thumbnail}/>
        <Details>
          <ChannelImage
            src={video.creator.pic}
          />
          <Texts>
            <Title>{video.submission.title}</Title>
            <ChannelName>{video.creator.name}</ChannelName>
            <Info>{video.comment.count} Reactions 
            <br/>
            {video.reaction.count} Comments</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default VideoItem;