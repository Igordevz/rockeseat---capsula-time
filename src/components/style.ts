"use client"

import  styled  from "styled-components"

export const ContentApp = styled.div`

    display: flex;
    flex-direction: row;

`
export const ContainerLeft = styled.div`
    height: 100vh;
    position: fixed;
    width: 50%;
    background: #121215;
    display: flex;
    align-items: center;
    justify-content:center ;
    .content{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    #avatar{
        border-radius: 80%;
    }
    .title {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .title h1{
        font-size: 25px;
        color: white;
        text-align: center;
        max-width: 350px;
        font-weight: 400;
    }
    .title p{
        margin-top: 10px;
        color: gray;
        font-size: 14px;
    }
    .title a{
        text-decoration: none;
        color: #FF5C3A;
    }
  
`
export const BlurItem = styled.div`
    height: 50vh;
    width: 30vh;
    position: absolute;
    border-radius: 100% 0 0 100%;
    right: 0;

    filter: blur(150px);
    background: #5C3EA3;

`
export const ContainerRigth = styled.div`
    display: flex;
    color: gray;
    align-items: center;
    position: absolute;
    right: 0;
    flex-direction: column;
    align-items: center;
    width: 50%;
    z-index: 99;
    background: #121215;
`
export const Post = styled.div`
    gap: 50px;
    margin-top: 50px;
    margin-bottom: 50px;

    align-items: center;
    flex-direction: column;
    justify-content: center;
    display: flex;
    width: 50%;
    .title {
        gap: 5px;
        display: flex;
        flex-direction: column;
    }
    .title h1{
        color: white;
    }

`