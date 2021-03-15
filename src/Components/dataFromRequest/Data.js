import React from 'react'
import {useSelector} from 'react-redux'
import Repositories from './Repositories/Repositories'
import PropTypes from 'prop-types'

const Data = () => {
  const loading = useSelector(state => state.repos.loading)
  const error = useSelector(state => state.repos.error)
  const data = useSelector(state => state.repos.data)
  const value = useSelector(state => state.repos.value)

  console.log(loading)
  let window = null
  if(!data && !loading){
    window = null
  } else if (error){
    window = <h1>Sorry, we have problems, try it again</h1>
  } else if (loading){
    window = <h1>Loading...</h1>
  } else if (data) {
    window = data.map(item => <Repositories 
      key={item.id + Math.random()}
      name={item.name}
      author={item.author}
      stars={item.stars}
      description={item.description}
      authorAvatar={item.authorAvatar}
    />)
  }
  return (
    <>
      {window}
    </>
  )
}

Data.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  data: PropTypes.array,
  value: PropTypes.string,
}

export default Data
