import styled from "styled-components";
import {ReactComponent as heart} from "./Vector.svg"

export const Container = styled.div`
    margin: 36px 121px;
    font-family: 'CeraPRO-Regular', 'Montserrat', sans-serif;
    .img{
        width: 300px;
        margin-right: 52px;
    }
    .info{
        width: 100%;
    }
    h1{
        margin: 0;
    }
    .size{
        margin-bottom: 11px;
    }
    .choose{
        margin-top: 23px;
        display: flex;
        align-items: center;
        column-gap: 24px;
        .counter{
            width: 33px;
            height: 38px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 31px;
            user-select: none;
            cursor: pointer;
            background: linear-gradient(180deg, #46A358 0%, rgba(70, 163, 88, 0.8) 100%);
            color: #fff;
            font-size: 28px;
            :active{
                background: linear-gradient(360deg, #46A358 0%, rgba(70, 163, 88, 0.8) 100%);
            }
        }
        .count{
            width: 18px;
            text-align: center;
        }
        button{
            background: #46A358;
            border-radius: 6px;
            border: 0;
            color: #fff;
            padding: 10px 32px;
            margin-right: 10px;
            font-family: 'CeraPRO-Regular', 'Montserrat', sans-serif;
            font-weight: 700;
            cursor: pointer;
        }
        #favourite{
            background-color: #fff;
            border: 1px solid #E5E5E5;
            padding: 0;
            width: 44px;
            height: 40px;
        }
    }
    .nav{
        text-decoration: none;
        color: #46A358;
    }
`

export const FavouriteIcon = styled(heart)``

export const Product = styled.div`
    margin: 45px;
    display: flex;
`

export const Size = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border: 1px solid ${({className, id}) => className === id ? "#46A358" : "#EAEAEA"};
    margin-right: 10px;
    border-radius: 50%;
    user-select: none;
    color: ${({className, id}) => className === id ? "#46A358" : "#727272"};
    cursor: pointer;
`