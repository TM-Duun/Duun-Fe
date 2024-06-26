import styled from "styled-components";

export const Bean = styled.div`
    margin : 0;
    padding : 0;
`;

export const LikesWrapper = styled.div`
  width : 100vw;
  min-height : 100vh;
  height: auto;
  margin : 0;
  padding : 0;
  display : flex;
  align-items : center;
  justify-content : center;
`;

export const LikesBox = styled.div`
    width : 65vw;
    min-height : 80vh;
    margin : 80px 0 0 0;
    padding : 0;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
`;

export const LikesTop = styled.div`
    position : relative;
    width : 65vw;
    height : 20vh;
    margin : 0 0 0 0;
    padding : 0;
    display : flex;
    flex-direction : column;
    gap : 20px;
    justify-content : center;
`;

export const LikesCircle = styled.img`
    position : absolute;
    top : 15px;
    left : -10px;
    width : 30px;
    height : 30px;
    object-fit : contain;
`;

export const LikesTitle = styled.p`
    font-size : 24px;
    font-weight : bold;
    font-family : 'pretendard';
    color : #678EF2;
`;

export const LikesScript = styled.p`
    font-size : 14px;
    font-weight : regular;
    font-family : 'pretendard';
    color : #484545;
`;

export const LikesGrid=styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr); 
    gap: 40px; 
    padding-top: 20px;
    width: 100%;
`;

export const LikesLine = styled.div`
    width : 100%;
    height : 1px;
    background-color : #C2C2C2;
`;

export const LikesBottom = styled.div`
    width : 65vw;
    min-height : 60vh;
    height: auto;
    margin : 0;
    padding : 0;
`;

