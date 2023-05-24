import React from "react";
import styled from "styled-components";
import { useSelector } from 'react-redux'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import MessageIcon from '@mui/icons-material/Message';
import ReplyIcon from '@mui/icons-material/Reply';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const Wrapper = styled.div`
  width: 300px;
  position: relative;
  -webkit-box-shadow: 3px 3px 6px 0px rgba(207,205,207,1);
-moz-box-shadow: 3px 3px 6px 0px rgba(207,205,207,1);
box-shadow: 3px 3px 6px 0px rgba(207,205,207,1);

`;

const VideoFrame = styled.video` {
  width: 100%;
  height: 100%;
  border-radius : 5px;
}
`
const Details = styled.div`
display : flex;
flex-direction : column;
justify-content : flex-end;
position : absolute;
bottom : 0;
left : 0;
// border : 2px solid red;
width : 300px;
height : 100px;
padding-left : 5px;

`

const ChannelInfo = styled.div`
  display: flex;
  align-items: center;
  gap : 10px;
  // border : 2px solid red;
`;

const ChannelImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  // border : 2px solid red;

`;

const ChannelName = styled.p`
  font-size: 16px;
  font-weight: bold;
  // border : 2px solid red;
  color : white;
`;

const Description = styled.p`
  font-size: 14px;
  width : 100%
  text-overflow: ellipsis; 
  overflow: hidden; 
  white-space:  wrap;
  margin-bottom : -4px;
  color : white;
  font-family : verdana;
`;


const ActionButtons = styled.div`
  display: flex;
  position : absolute;
  bottom : 0;
  right : 0;
  // border : 2px solid red;
  flex-direction : column;
  color : white;
  justify-content : space-around;
  gap : 20px;
  padding : 5px;
  padding-bottom : 100px;
  
`;
const ActionIcon = styled.div`
// border : 1px solid red;
border-radius : 50%;
height : 40px;
width : 40px;
padding : 5px;
display : flex;
align-items : center;
justify-content : center;
background-color : #2c2c2c76;


`

const Video = () => {
  const video = useSelector((state) => state.video)
  return (
    <Container>
      <Wrapper>
        <VideoFrame src={video.submission.mediaUrl} controls/>
        <ActionButtons>
          <ActionIcon>
          <ThumbUpIcon/>
          </ActionIcon>
          <ActionIcon>
          <ThumbDownAltIcon/>
          </ActionIcon>
          <ActionIcon>
          <MessageIcon/>
          </ActionIcon>
          <ActionIcon>
          <ReplyIcon/>
          </ActionIcon>
        </ActionButtons>
        <Details>
        <Description>{video.submission.description}</Description>
          <ChannelInfo>
            <ChannelImage src = {video.creator.pic}/>
            <ChannelName>{video.creator.name}</ChannelName>
          </ChannelInfo>
          
        </Details>
      </Wrapper>
      
    </Container>
  );
};

export default Video;