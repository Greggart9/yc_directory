import React from 'react'
import SearchFormReset from './SearchFormReset';
import Form from 'next/form';
import { Search } from 'lucide-react';

const SearchForm = ({ query }: {query?: string }) => {

  return (
    
      <Form action='/' scroll={false}
       className='search-form '>
        <div className=' flex justify-between border-3 border-black rounded-3xl px-4 py-2 w-[400px] bg-white outline-none'>
         <input
            name='query'
            defaultValue={query}
            className='search-input outline-none '
            placeholder='Search Startups'
         />

         <div className='flex  gap-2'>
            {query && <SearchFormReset />}

            <button type='submit' className='search-btn bg-black rounded-4xl p-2'>
                <Search className='size-5 text-white'/>
            </button>
         </div>
        </div>
      </Form>
    
    
  )
}

export default SearchForm