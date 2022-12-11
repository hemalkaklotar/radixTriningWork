import React, { useState } from 'react'

const UsestateHookArray = () => {
    const [item,setItem] = useState([])

    const AddNumber = () =>{

        setItem([{
            id:item.length,
            value: Math.floor(Math.random() * (9999 - 1000)) + 1000
        }])
    }
  return (
    <>
    <button onClick={AddNumber}>GENERATE OTP</button>
    <ul>
        {
            item.map((ele)=>{
                return(
                    <li key={ele.id}>{ele.value}</li>
                )
            })
        }
    </ul>
    </>
  )
}

export default UsestateHookArray