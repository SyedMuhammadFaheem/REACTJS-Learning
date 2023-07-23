import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      <button onClick={()=> props.caller('Child hai apun')}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent
