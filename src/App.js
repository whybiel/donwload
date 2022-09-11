import React, { useState } from "react";
import * as S from "./style"

const urlDonwload = "https://speed.hetzner.de/100MB.bin"

export default function App(){
  const [donwload, setDonwload] = useState('')
  const [count, setCount] = useState('')

  const handleDonwload =()=>{
    setDonwload(urlDonwload)
    setCount((old)=> old + 1)
  }
  
  return(
    <S.Container>
      <S.GlobalStyle/>
      <S.BoxContent>
        <h1>Clique para fazer o <S.Span>Donwload</S.Span></h1>
        <S.P>Isso é apenas um teste para prática de donwload de arquivos pelo React!</S.P>
        <S.Btn onClick={()=>{handleDonwload()}}>Donwload</S.Btn>
        {donwload && <iframe title="none" style={{display:"none"}} src={donwload + "?c=" + count}/>}
      </S.BoxContent>
      
    </S.Container>
  )
} 