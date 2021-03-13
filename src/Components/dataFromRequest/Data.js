import React from 'react'
import {useSelector} from 'react-redux'

const Data = (props) => {
  const data = useSelector(state => state.repos.data)
  console.log(data)
  return (
    <div>
    <h1></h1>
      {/* {data ? <h1>{data}</h1> : null} */}
    </div>
  )
}

export default Data
