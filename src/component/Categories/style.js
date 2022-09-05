import styled from "styled-components";

export const Box = styled.div`
    padding: 14px 18px;
    background-color: #FBFBFB;
    width: 310px;
    height: 500px;
    h2{
        margin: 0;
    }
    ul{
        list-style: none;
        margin: 0 0 0 12px;
        padding: 0;
        color: #3D3D3D;
        >li{
            display: block;
            margin-top: 14px;
        }
        a{
            text-decoration: none;
            color: #3D3D3D;
            display: inline-flex;
            justify-content: space-between;
            width: 100%;
        }
    }
`