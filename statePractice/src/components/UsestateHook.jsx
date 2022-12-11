import React, { useState } from 'react'

const UsestateHook = () => {
  const[name,setName]= useState({firstname:'',lastname:''})
    return (
      <form>

        <input type='text'
            value={name.firstname}
            onChange={e => setName({...name,firstname: e.target.value})}
        />

        <input 
          type='text'
          value={name.lastname}
          onChange={e => setName({...name,lastname:e.target.value})}
        />

        <h5>Your first name is:{name.firstname}</h5>
        <h5>Your last name is:{name.lastname}</h5>

        </form>
  )
}

export default UsestateHook