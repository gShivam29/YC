import React from 'react'
import Form from 'next/form'
import SearchFormReset from './SearchFormReset'
import { Search } from 'lucide-react'
const SearchForm = ({query} : {query?:string}) => {

    
  return (
    <Form action="/" scroll={false} className="search-form">
        <input 
            defaultValue={query}
            name='query'
            className='search-input'
            placeholder='Search'
        />

        <div className="flex gap-2">
            {query && <SearchFormReset/>

            }
            <button type="submit" className='search-btn text-white'>
                <Search/>
            </button>

        </div>
    </Form>
  )
}

export default SearchForm