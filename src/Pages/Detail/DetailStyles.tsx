import { Link } from "react-router-dom";
import styled from "styled-components";

export const Block = styled.div`
    width : 100%;
    height : 80px;
    margin : 0;
    padding : 0;
    background-color : transparent;
`;
export const DeatailHeader = styled(Link)`
    margin-top: 40px;
    display: flex;
    width : 100%;
    img{
        margin-top: 1px;
        width: 18px;
        height: 6px;
    }
    text-decoration: none;
    color: black;
    font-family: 'pretendard';

`;
export const Back=styled.span`
    margin-left: 5px;
    font-size:12px;
`;

export const ItemDiv=styled.div`
    white-space: nowrap;
    margin-top: 20px;
    width: 100%;
    display: flex;
    img{
        height: 100%;
        width : 40%;
        object-fit : contain;
    }
`;

export const ItemInfo = styled.div`
    font-family: 'Poppins';
    width: 60%;
    display: flex;
    flex-direction: column;
    font-size: 24px;
    padding-left: 60px;
`;

export const InfoTextDiv=styled.div`
    font-size: 16px;
    border-bottom: 1px solid #474747;
    margin-top: 20px;
`;
export const ProductsInfo = styled.div`
    display: flex;
    line-height: 40px;
    span{
        color: #474747;
        width: 70px;
    }
`;

export const ProductDiv=styled.div`
    margin-left: 80px;
`;

export const Info = styled.span`
    margin-top: 30px;
    color: #3F3F3F;
`;

export const BtnTotalDiv = styled.div`
    margin-top: 10px;
    height: 45%;
    display: flex;
    align-items: center;
`;

export const PurchaseBtn=styled.button`
    width: 40%;
    font-family: 'pretendard';
    font-size: 32px;
    border:none;
    height: 70%;
    color: white;
    background-color: #7C9DEF;
    border-radius: 20px;
    &:hover {
        cursor : pointer;
    }
`;
export const Total = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 40px;
    margin-left: auto;
    color:black;
    font-weight: 500;
`;

export const RecommendedItemDiv=styled.div`
    margin-top: 40px;
    /* border:1px solid red; */
    /* justify-content: center; */
    /* background-color: blue; */
    /* display: flex; */
`