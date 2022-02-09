import React from 'react'

export default function Plans(props) {
  return (
    <div >
    <div className="row">
    <li className="shadow col-sm-6 my-3 py-2 ">{props.value}</li>
    <button onClick={()=>{props.hndleDel(props.id)}} className="btn btn-danger  col-sm-2  offset-5 inline">X</button>
    </div>
    </div>
  )
}
