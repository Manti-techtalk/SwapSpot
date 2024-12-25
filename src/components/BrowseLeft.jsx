import React from 'react';

function BrowseLeft() {
  return (
    <div className=" bg-light p-3  border border-dark" style={{ width: '300px' }}>
      <p className="h5 col-12">Filters</p>
      <div className="col-12">
        <p>Price Range</p>
        <input type="text" className="form-control"/>
      </div>
      <div className="col-12">
        <p>Location</p>
        <input type="text" className="form-control"/>
      </div>
      <div className="col-12">
        <p>Categories</p>
        <input type="text" className="form-control" style={{ height: '200px' }}/>
      </div>
    </div>
  );
}

export default BrowseLeft;
