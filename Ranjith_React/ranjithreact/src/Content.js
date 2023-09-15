import React from 'react'

const Content = () => {
    function handleWords(){
        const words=["am","am not","was"]
        const int=Math.floor(Math.random()*3)
        return words[int]
      }
  return (
    <div>I {handleWords() } here.</div>
  )
}

export default Content