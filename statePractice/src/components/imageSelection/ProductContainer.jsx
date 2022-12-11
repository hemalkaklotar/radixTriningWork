import React from 'react'
import { useState } from 'react'
import "./style.css"
import img1 from "../../images/img1.png"
import img2 from "../../images/img2.png"
import img3 from "../../images/img3.png"
import img4 from "../../images/img4.png"
import img5 from "../../images/img5.png"


import ShowCaseImage from './ShowCaseImage'
import StackImages from './StackImages'
const ProductContainer = () => {

  const [img, setImage] = useState(0);
  let imgArray = [img1, img2, img3, img4, img5]
  return (
    <div>
      hello
      <ShowCaseImage img={img} imgArray={imgArray} />
      <StackImages imgArray={imgArray} setImage={setImage} />
    </div>
  )
}

export default ProductContainer