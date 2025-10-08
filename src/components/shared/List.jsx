import React from 'react'

function List({className, listName}) {
  return (
    <li className={className}>{listName}</li>
  )
}

export default List;