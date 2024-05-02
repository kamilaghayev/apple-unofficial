import { Html } from '@react-three/drei'
import React from 'react'
import "./loader.css"

const Loader = () => {
  return (
    <Html>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="w-[10vw] h-[10vw] rounded-full">

          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

        </div>
      </div>
    </Html>
  )
}

export default Loader