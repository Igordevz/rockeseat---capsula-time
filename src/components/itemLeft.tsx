import React from 'react'
import { BlurItem, ContainerLeft } from './style'
import Image from 'next/image'
import imgllogo from "../assets/logo.png"
import avatar from "../assets/avatar.png"
export default function ItemLeft() {
  return (
    <ContainerLeft>
      <BlurItem />
      <div className="content">
        <Image src={imgllogo} alt='Logo'></Image>
        <br />
        <Image src={avatar} alt='avatar' width={90} id='avatar'></Image>
        <br />
        <div className="title">
          <h1>
            Capsula Do Tempo De  <strong>Rodrigo Gonçalves</strong>
          </h1>
          <p>Feito Por <a href="https://github.com/Igordevz" target='_blank'>Igordevz</a>
          </p>
        </div>
      </div>


    </ContainerLeft>
  )
}
