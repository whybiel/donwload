import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
`

export const Container = styled.section`
    width: 100%;
    height: 100vh;
    background-color:hsla(0,100%,50%,1);
    background-image:
    radial-gradient(at 40% 20%, hsla(5,55%,47%,1) 0px, transparent 50%),
    radial-gradient(at 81% 17%, hsla(189,88%,58%,1) 0px, transparent 50%),
    radial-gradient(at 0% 80%, hsla(354,100%,99%,1) 0px, transparent 50%),
    radial-gradient(at 17% 49%, hsla(340,17%,64%,1) 0px, transparent 50%),
    radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0px, transparent 50%),
    radial-gradient(at 54% 54%, hsla(240,84%,47%,1) 0px, transparent 50%),
    radial-gradient(at 0% 0%, hsla(341,100%,46%,1) 0px, transparent 50%); 
    display: flex;
    align-items: center;
    justify-content: center;

    
`

export const BoxContent = styled.div`
    width: 25%;
    height: 60vh;
    background-color :#fff ;
    border-radius: 10px;
    font-family: 'Poppins', sans-serif;
    text-align: center;
    padding: 20px 20px;

    @media (max-width:850px) {
        width: 50%;
    }
`

export const Span = styled.span`
    font-weight: 300, "Italic";
    color:red;
`

export const P = styled.p`
    color:#000;
    font-weight: 300;
    margin: 40px 0;
`

export const Btn = styled.button`
  width: 10vw;
  height: 5vh;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 1s;
  border-radius: 10px;

  &:hover{
    color:#fff;
    background-color: red;
    box-shadow: 5px 5px 5px red;
  }
`