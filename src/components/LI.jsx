import React from 'react'

const Li = (props) => {
  return (
    <div>
       <ul>
           <li>
               {props.list}
           </li>
       </ul>
    </div>
  )
}

export default Li