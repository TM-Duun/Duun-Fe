import styled from "styled-components";

export const Block = styled.div`
    /* width : 100%; */
    height : 50px;
    margin : 0;
    padding : 0;
    background-color : transparent;
`;
export const CartHeader = styled.div`
    margin-left: 20px;
    margin-top: 100px;
    font-size: 36px;
    font-weight: bold;
    img{
        margin-bottom: 12px;
        height: 30px;
        width: 30px;
    }
`;
export const HeaderText=styled.span`
    margin-top: 12px;
    margin-left: -18px;
    color: #678EF2;
`;
export const Counter=styled.span`
    margin-left: 15px;
`;

export const CartContainer = styled.div`
    height: 100%;
    margin-top: 50px;
    width: 100%;
    padding-bottom: 20px;
    border-bottom: 1px solid #C2C2C2;
    font-size: 20px;
`;
export const CartGrid = styled.div`
    display: grid;
    text-align: center;
    align-items: center;
    grid-template-columns: 0.5fr 3fr 1fr 1fr 1fr 0.3fr;
    margin-bottom: 70px;
    gap:60px;
    /* width: 100%; */
`;

export const Image=styled.img`
    width: 90px;
    height: 90px;
    object-fit: contain;
    margin-right: 10px;

`;

export const Name=styled.div`
    text-align: left;
    flex-direction: column;
    white-space: nowrap; 
    overflow: hidden;    
    text-overflow: ellipsis; 
    max-width: 250px; 
`;

export const Option = styled.div`
    margin-top: 20px;
    font-size: 16px;
    color: #555555;
`;

export const Price = styled.span`

`;

export const Discount = styled.span`

`;

export const Count = styled.span`
`;

export const DeleteBtn=styled.button`
    background-color:#81a5ffc8 ;
    border:none;
    width: 30px;
    height: 30px;
    border-radius: 20px;
    color:white;
`;
export const BtnDiv = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
`;
export const Btn = styled.button`
    border:none;
    border-radius: 30px;
    background-color: #A7BCEF;
    color: white;
    width: 200px;
    height: 80px;
    font-size: 32px;
    &:hover {
        cursor : pointer
    }
`;
export const Total = styled.div`
    text-align:right;
    font-size: 36px;
    margin-left: auto;
    white-space: nowrap;
`;
export const InvisibleSpace = styled.div`
    flex:1;
`;