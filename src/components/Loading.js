import React from "react";
import styled, { keyframes } from "styled-components";

const LoaderContainer = styled.div`
  margin-top: 15px;
  width: 100%;
  height: 36px;
  cursor: default;
  // not active scroll-y
`;

const move = keyframes`
    0% {
        left:0;
        opacity:0;
    }
    35% {
        left: 41%; 
        transform:rotate(0deg);
        opacity:1;
    }
    65% {
        left:59%; 
        transform:rotate(0deg); 
        opacity:1;
    }
    100% {
        left:100%; 
        transform:rotate(-180deg);
        opacity:0;
    }  
`;

const Word = styled.div`
  position: absolute;
  width: 20px;
  height: 36px;
  opacity: 0;
  animation: ${move} 2s linear infinite;
  transform: rotate(180deg);
  color: aqua;
`;
const Word2 = styled(Word)`
  animation-delay: 0.2s;
`;

const Word3 = styled(Word)`
  animation-delay: 0.4s;
`;
const Word4 = styled(Word)`
  animation-delay: 0.6s;
`;
const Word5 = styled(Word)`
  animation-delay: 0.8s;
`;
const Word6 = styled(Word)`
  animation-delay: 1s;
`;
const Word7 = styled(Word)`
  animation-delay: 1.2s;
`;

function Loader() {
  return (
    <LoaderContainer>
      <Word>G</Word>
      <Word2>N</Word2>
      <Word3>I</Word3>
      <Word4>D</Word4>
      <Word5>A</Word5>
      <Word6>O</Word6>
      <Word7>L</Word7>
    </LoaderContainer>
  );
}

export default React.memo(Loader);
