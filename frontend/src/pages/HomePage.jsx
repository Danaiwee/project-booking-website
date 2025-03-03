import React from 'react'
import Hero from '../components/Hero'
import SearchBar from '../components/SearchBar'

const HomePage = () => {
  return (
    <div className='flex flex-col relative'>
      <Hero />
      <SearchBar />
      
    </div>
  )
}

export default HomePage