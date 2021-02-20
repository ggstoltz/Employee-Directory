import React from 'react';

function SearchForm(props) {
    return (
        <form>
            <div className='form-group'>
                <label htmlFor='search'>Search:</label>
                <imput
                        onChange={props.handleImputChange}
                        value={props.search}
                        name='search'
                        type='text'
                        className='form-control'
                        placeholder='Search Employees'
                        id='search'
            />
            <button onClick={props.handleFormSubmit} className='btn btn-info mt-3'>
                Search
            </button>
            </div>
        </form>
    );
}

export default SearchForm;