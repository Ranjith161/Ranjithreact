import React, { useCallback } from 'react'
import { useState } from 'react'

const Content = () => {
  const[items,setItems]= useState([{id:1,checked:true,item:"Play cricket"},
  {id:1,checked:true,item:"footbal"},
  {id:1,checked:true,item:"coco"}])
  
      
     
  return (
    <main>
      <ul>
        {items.map((item)=>(
          <li>
            <input type="checkbox"
            checked={item.checked} />
            <label >{item.item}</label>
            <button>delete</button>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Content