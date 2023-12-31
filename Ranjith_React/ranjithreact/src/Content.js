import React from 'react'
import { useState } from 'react'
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {
  const[items,setItems]= useState([{id:1,checked:true,item:"Play cricket"},
  { id:2,checked:true,item:"footbal"},
  {id:3,checked:true,item:"coco"}])
  
      
     
  return (
    <main>
      <ul>
        {items.map((item)=>(
          <li className='item' key={item.id}>
            <input type="checkbox"
            checked={item.checked} />
            <label >{item.item} </label>
            <FaTrashAlt
             role='button'
             tabIndex="0"/>
            
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Content