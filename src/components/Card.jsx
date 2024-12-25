import React, { useState, useEffect } from 'react';

function Card() {
  const [data, setData] = useState([]);
  const [visibleItems, setVisibleItems] = useState(3);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  };

  const handleSeeMore = () => {
    setVisibleItems(data.length);
  };

  return (
    <div className="container">
      <div className="row">
        {data.slice(0, visibleItems).map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card" style={{ width: '18rem', height: '100%' }}>
              <img src={item.image} className="card-img-top" alt={item.title} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">${item.price.toFixed(2)}</p>
                <a href="#" className="btn btn-primary mt-auto">Buy Item</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {visibleItems < data.length && (
        <div className="text-center">
          <button className="btn btn-primary mt-4" onClick={handleSeeMore}>
            See More
          </button>
        </div>
      )}
    </div>
  );
}

export default Card;
