import React from 'react';

const PriceItem = ({ item, isExpanded, onClick }) => {
  return (
    <div
      className={`price-item-container ${isExpanded ? 'expanded' : 'collapsed'}`}
      onClick={onClick}
    >
      <div className="price-item">
        <h3>{item.title}</h3>
        <p className="price">{item.price}</p>
        <p>{item.description}</p>
        {/* Add more item details as needed */}
      </div>
    </div>
  );
};

export default PriceItem;
