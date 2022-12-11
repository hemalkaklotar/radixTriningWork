import React, { isValidElement, useEffect } from 'react'


const ShowCaseImage = ({ img,imgArray }) => {
  useEffect(()=>{
    const isValidDate =(...val)=>{

      var x = !Number.isNaN(new Date(...val).valueOf())
      var y = !Number.isNaN(new Date(...val).valueOf())
     console.log(y)
    }
    isValidDate("Dec 17,1995 03:24:00")
  })

  return (
      <div>
          <img className='showcaseImage' src={imgArray[img]} alt="" />
      </div>

  )
}

export default ShowCaseImage