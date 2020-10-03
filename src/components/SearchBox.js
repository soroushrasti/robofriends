import React from 'react';

const SearchBox=({searchField,searchChange}) => {
    return(
    <div className='pa2'>
     <input type='search' className='pa3 ba b--green bg-lightest-blue' onChange={searchChange}  placeholder='search robots'/>
    </div> );
}

export default SearchBox;