import { Link } from "react-router-dom";
import styled from "styled-components";


export const Wrapper = styled.div`
    width : 100%;
    height : 8vh;
    position : fixed;
    padding : 10px 200px;
    box-sizing : border-box;
    margin : 0;
    display : flex;
    align-items : center;
    justify-content : space-evenly;
`;

export const NavLeft = styled(Link)`
    flex-grow : 1;
    height : 100%;
    display : flex;
    align-items : center;
    margin : 0;
    padding : 0;
    text-decoration : none;

    &:hover {
        cursor : pointer;
    }
`;

export const LogoImg = styled.img`
    width : 70px;
    height : 70px;
    object-fit : contain;
`;

export const LogoTitle = styled.p`
    font-size : 24px;
    font-weight : bold;
    color : #7C9DEF;
`;

export const NavMiddle = styled.div`
    position : relative;
    flex-grow : 1;
    height : 100%;
    padding : 0;
    margin : 0 20px 0 0;
    display : flex;
    align-items : center;
    justify-content : center;
`;

export const NavSearch = styled.input`
    width : 100%;
    height : 100%;
    margin ; 0;
    padding : 10px 20px;
    box-sizing : border-box;
    display : flex;
    border-radius : 10px;
    border : none;
    outline : none;
    background-color : #F8F8F7;

    &::placeholder {
        color : #ccc;
    }
`;

export const SearchIcon = styled.img`
    position : absolute;
    top : 25%;
    right : 20px;
    width : 20px;
    height : 20px;
    object-fit : contain;
`;

export const NavRight = styled.div`
    flex-grow : 1;
    height : 100%;
    display : flex;
    justify-content : space-evenly;
    align-items : center;
    margin : 0;
    padding : 0;
`;

export const NavItem = styled(Link)`
    height : 100%;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    padding : 0;
    margin : 0;
    text-decoration : none;

    &:hover {
        cursor : pointer;
    }
`;

export const ItemImg = styled.img `
    width : 30px;
    height : 30px;
    margin : 0;
    padding : 0;
    object-fit : contain;
`;

export const ItemName = styled.p`
    font-size : 12px;
    font-weight : medium;
    font-family : 'pretendard';
    color : #7C9DEF;
    margin : 5px 0 0 0;
    padding : 0;
`;

export const LoginItem = styled(Link)`
    font-size : 24px;
    font-weight : 550;
    color : #7C9DEF;
    text-decoration : none;

    &:hover {
        cursor : pointer;
    }
`;