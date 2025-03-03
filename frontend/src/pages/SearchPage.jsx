import React from 'react'
import Filter from '../components/Filter'
import CardItem from '../components/CardItem'

const SearchPage = () => {
  return (
    <section className='w-full h-full mt-5'>
        <div className='w-full max-w-7xl mx-auto flex flex-col sm:flex-row gap-2'>
            <div className='flex-1'>
                <Filter />
            </div>

            <div className='flex-3 flex flex-col gap-2'>
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
            </div>
        </div>
    </section>
  )
}

export default SearchPage