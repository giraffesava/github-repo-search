import React from 'react'
import * as classes from './Repository.module.css'
import PropTypes from 'prop-types'

function Repositories(props) {
  return (
    <div className={classes.Container}>
      <div className={classes.LeftSide}>
        <img src={props.authorAvatar} alt={props.name} />
        <h1>{props.author}</h1>
      </div>
      <div className={classes.RightSide}>
        <h3><strong>Name:</strong> {props.name}</h3>
        <h3><strong>Description:</strong> {props.description}</h3>
        <h3>{props.stars}<strong>★</strong></h3>
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
