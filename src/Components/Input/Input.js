import React from 'react'
import './Input.module.css'
import {useDispatch} from 'react-redux'
import {getApiRequest} from '../../store/actions/index'

const Input = () => {
  const dispatch = useDispatch()

  return (
    <div>
      <input 
        type="text" 
        placeholder="Input the repository"
        onChange={(event) => dispatch(getApiRequest(event.target.value))}
        />
    </div>
  )
}

export default Input
