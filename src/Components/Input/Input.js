import React, {useState, useEffect} from 'react'
import './Input.module.css'
import {connect} from 'react-redux'
import { apiRequest } from '../../store/actions/request'

const Input = (props) => {

  const [value, setValue] = useState("")

  useEffect(() => {
    props.apiRequest(value)
  }, [value])

  return (
    <div>
      <input 
        type="text" 
        placeholder="Input the value" 
        value={value} 
        onInput={(event) => setValue(event.target.value)}
        />
    </div>
  )
}

const mapDispatchToProps = {
  apiRequest
}

export default connect(null, mapDispatchToProps)(Input)
