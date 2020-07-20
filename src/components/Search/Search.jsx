import React from "react";

export const Search = (props) => {

    const addQuery = (e) => {
        props.addQuery(e.target.value);
    }

    return (
      <div className='form-group'>
          <label htmlFor="searchInput" className="col-sm-2 col-form-label">Search</label>
          <input onChange={addQuery} type="text" id="searchInput"/>
      </div>
    )
}