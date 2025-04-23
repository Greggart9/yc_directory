import React from 'react'
import SearchFormReset from './SearchFormReset';
import Form from 'next/form';

const SearchForm = () => {
    const query = 'Test'

  return (
    
      <Form action='/' scroll={false}
       className='search-form '>
        <div className=' flex justify-between border-3 border-black rounded-3xl px-4 py-2 w-[400px] bg-white outline-none'>
         <input
            name='query'
            defaultValue={query}
            className='search-input '
            placeholder='Search Startups'
         />

         <div className='flex  gap-2'>
            {query && <SearchFormReset />}

            <button type='submit' className='search-btn bg-black rounded-4xl px-3 py-1'>
                <span className="search-btn text-white">S</span>
            </button>
         </div>
        </div>
      </Form>
    
    
  )
}

export default SearchForm