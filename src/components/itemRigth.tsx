import React, { Suspense } from 'react'
import { ContainerRigth, Post } from './style'
import simulatorpost from "../assets/simulator-post.png"
import Image from 'next/image'
export default function ItemRigth() {
  return (
    <ContainerRigth>
       
          <Post>
          <div className="title">
            <p>20 de Março 2023</p>
            <h1>Jornada do Zero à Primeira Vaga</h1>
            <Image alt='post-img' src={simulatorpost} width={500}/>
            <br />
            <span>
              At vero eos et accusamus et iusto odio dignissimos
              ducimus qui blanditiis praesentium voluptatum deleniti atque
              corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique...
            </span>
          </div>
         </Post>
      <Post>
        <div className="title">
          <p>20 de Março 2023</p>
          <h1>Jornada do Zero à Primeira Vaga</h1>
          <Image alt='post-img' src={simulatorpost} width={500}/>
          <br />
          <span>
            At vero eos et accusamus et iusto odio dignissimos
            ducimus qui blanditiis praesentium voluptatum deleniti atque
            corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique...
          </span>
        </div>
      </Post>
      <Post>
        <div className="title">
          <p>20 de Março 2023</p>
          <h1>Jornada do Zero à Primeira Vaga</h1>
          <Image alt='post-img' src={simulatorpost}  width={500}/>
          <br />
          <span>
            At vero eos et accusamus et iusto odio dignissimos
            ducimus qui blanditiis praesentium voluptatum deleniti atque
            corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique...
          </span>
        </div>
      </Post>
    </ContainerRigth>
  )
}
