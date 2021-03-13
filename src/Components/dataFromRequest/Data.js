import React from 'react'
import {useSelector} from 'react-redux'
import Repositories from './Repositories/Repositories'
import SpinnerInfinity from 'react-spinners'

const Data = () => {
  const loading = useSelector(state => state.repos.loading)
  const error = useSelector(state => state.repos.error)
  const data = useSelector(state => state.repos.data)
  console.log(data)
  let window = null
  if(!data && !loading){
    window = <h1>Input name of repository</h1>
  } else if (error){
    window = <h1>Sorry, we have problems, try it again</h1>
  } else if (loading){
    window = <h1>Loading...</h1>
  } else {
    const date = new Date()
    window = data.map(item => <Repositories 
      key={item.id + Math.random()}
      name={item.name}
      author={item.author}
      start={item.start}
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

export default Data
