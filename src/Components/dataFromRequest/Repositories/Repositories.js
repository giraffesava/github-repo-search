import React from 'react'
import {useSelector} from 'react-redux'
import * as classes from './Repositories.module.css'
import PropTypes from 'prop-types'

function Repositories(props) {
  const data = useSelector(state => state.repos.data)
  return (
    <div className={classes.Container}>
      <div className={classes.LeftSide}>
        <img src={props.authorAvatar} alt={props.name} />
        <h1>{props.author}</h1>
      </div>
      <div className={classes.RightSide}>
        <h3><strong>Name:</strong> {props.name}</h3>
        <h3><strong>Description:</strong> {props.description}</h3>
        <h3><strong>Stars:</strong> {props.stars}</h3>
      </div>
    </div>
  )
}

Repositories.propTypes = {
  name: PropTypes.string,
  author: PropTypes.string,
  stars: PropTypes.number,
  description: PropTypes.string,
  authorAvatar: PropTypes.string
}

export default Repositories
