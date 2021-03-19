import React, {useState} from 'react'
import classes from './Input.module.css'
import {useDispatch} from 'react-redux'
import {getApiRequest} from '../../store/actions/index'

const Input = () => {
  const [input, setInput] = useState("")
  const dispatch = useDispatch()

  const inputValueHandler = (event) => {
    const value = event.target.value.trimLeft()
    setInput(value)
    dispatch(getApiRequest(value))
  }

  return (
    <div>
      <input 
        className={classes.entryField}
        type="text" 
        value={input}
        autoFocus={true}
        placeholder="Input the repository"
        onChange={(event) => inputValueHandler(event)}
        />
    </div>
  )
}

export default Input
