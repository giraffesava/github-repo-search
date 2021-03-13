import React from 'react'
import {useSelector} from 'react-redux'
import './Repositories.module.css'

function Repositories(props) {
  const data = useSelector(state => state.repos.data)
  return (
    <div>
      <img src={props.authorAvatar} alt={props.name} width="50" height="50" />
      <h3>Name: {props.author}</h3>
      <h3>Description: {props.description}</h3>
      <h3>Stars: {props.stars}</h3>
      <h3>Name: {props.name}</h3>
      <h3>Name: {props.name}</h3>
      <h3>Name: {props.name}</h3>
    </div>
  )
}

export default Repositories
