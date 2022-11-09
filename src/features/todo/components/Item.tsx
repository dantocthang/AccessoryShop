import React from 'react'

interface Props{
    todo: string
}

function Item(props:Props) {
  return (
    <div>{props.todo}</div>
  )
}

export default Item