import React from 'react'
import {useSelector} from 'react-redux'
import Repository from './repository/Repository'
import PropTypes from 'prop-types'

const Repositories = () => {
  const loading = useSelector(state => state.repos.loading)
  const data = useSelector(state => state.repos.data)
  const error = useSelector(state => state.repos.error)
  if(!loading && !data.length && error){
    return <div><h1>Write something</h1></div>
  } 
  if (loading){
    return <div><h1>Loading...</h1></div>
  }
  return (
    <div>
      {!!data.length && data.map(item => <Repository 
        key={item.id + Math.random()}
        name={item.name}
        author={item.author}
        stars={item.stars}
        description={item.description}
        authorAvatar={item.authorAvatar}
      />)}
    </div>
  )
}

Repositories.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  data: PropTypes.array
}

export default Repositories
