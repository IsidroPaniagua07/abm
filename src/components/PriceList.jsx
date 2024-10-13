"use client";
import React, { useState } from 'react';
import PriceItem from './PriceItem';

const PriceList = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleItemClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className={`price-list ${expandedIndex !== null ? 'single-item-view' : ''}`}>
      {items.map((item, index) => (
        <PriceItem
          key={index}
          item={item}
          isExpanded={expandedIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default PriceList;
