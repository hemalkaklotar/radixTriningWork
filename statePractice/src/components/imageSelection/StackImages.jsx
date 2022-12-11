import React from 'react'
const StackImages = ({imgArray,setImage}) => {
    function handleImageSetter(key,e){
        setImage(key)
    }
  return (
    <div className='flex-image'>
        {
            imgArray.map((item,key)=>{
                return <div key={key}>
                    <button onClick={e => handleImageSetter(key)}>
                    <img className='stackimage' src={item} alt="" />
                    </button>
                </div> 
            }
            )
        }
    </div>
  )
}

export default StackImages