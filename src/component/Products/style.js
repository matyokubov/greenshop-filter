import styled from "styled-components";

export const Box = styled.div`
    margin-top: 38px;
    display: flex;
    flex-wrap: wrap;
    column-gap: 33px;
    row-gap: 70px;
`

export const Product = styled.div`
    .img{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 258px;
        height: 300px;
    }
    .self{
        display: inline-flex;
        flex-direction: column;
        .price{
            color: #46A358;
            font-weight: 700;
            font-size: 18px;
        }
    }
`