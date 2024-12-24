import React, { useContext } from 'react'
import { userName } from './Context'

const ChildOne = () => {

    const myName = useContext(userName);

  return (
    <div>
      <p>Child</p>
      <p>My name is {myName}</p>
    </div>
  )
}

export default ChildOne;
