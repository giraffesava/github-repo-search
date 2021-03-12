import React from 'react'
import {connect} from 'react-redux'

const Data = (props) => {
  return (
    <div>
      <h1>{props.request}</h1>
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state)
  return {
    request: state.request.value
  }
  
}

export default connect(mapStateToProps)(Data)
