"use client";
import { useState, useEffect } from 'react';
import styles from './Schedule.module.css'; // CSS module

export default function Home() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [cart, setCart] = useState([]);
  const [showAddOns, setShowAddOns] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const priceItems = [
    {
      category: "Full Set",
      items: [
        { name: "Short Full Set", duration: "3 hours", price: "$50.00", description: 'short set' },
        { name: "Medium Full Set", duration: "3 hours 40 minutes", price: "$60.00", description: 'med set' },
        { name: "Long Full Set", duration: "4 hours", price: "$70.00", description: 'long set' },
        { name: "XL Full Set", duration: "4 hours 40 minutes", price: "$80.00", description: 'xl set' },
      ],
    },
    {
      category: "Fill & Other Services",
      items: [
        { name: "Soak Off", duration: "1 hour 30 minutes", price: "$15.00", description: 'soak off' },
        { name: "Short Fill", duration: "2 hours", price: "$40.00", description: 'short fill' },
        { name: "Medium Fill", duration: "2 hours 40 minutes", price: "$50.00", description: 'medium fill' },
        { name: "Long Fill", duration: "3 hours 20 minutes", price: "$60.00", description: 'long fill' },
        { name: "X-LONG Fill", duration: "3 hours 40 minutes", price: "$70.00", description: 'xl fill' },
      ],
    },
  ];

  const handleItemClick = (categoryIndex, itemIndex) => {
    setIsTransitioning(true);
    if (
      selectedItem &&
      selectedItem.categoryIndex === categoryIndex &&
      selectedItem.itemIndex === itemIndex
    ) {
      setSelectedItem(null); // Deselect if clicking the same item
      setShowAddOns(false);
    } else {
      setSelectedItem({ categoryIndex, itemIndex });
      setShowAddOns(true);
    }
  };

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => setIsTransitioning(false), 300); // Match this with your transition duration
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  return (
    <div className="page-container">
      <main className="main-content">
        <section className="section-card" id="services">
          <h2 className="section-title">Book Your Appointment</h2>
          <div className="section-content flex flex-col justify-center">
            <span className="text-center italic">
              {selectedItem ? '(Tap again to unselect)' : '(Tap to select)'}
            </span>
            <div
              className={`${styles.priceGrid} font-bold ${
                isTransitioning ? styles.transitioning : ''
              }`}
            >
              {priceItems.map((category, categoryIndex) => (
                <div key={categoryIndex} className="price-card">
                  <h3
                    className={`price-category ${
                      selectedItem ? styles.headerHidden : ''
                    }`}
                  >
                    {category.category}
                  </h3>
                  <ul className={`price-list ${styles.priceList}`}>
                    {category.items.map((item, itemIndex) => {
                      const isSelected =
                        selectedItem &&
                        selectedItem.categoryIndex === categoryIndex &&
                        selectedItem.itemIndex === itemIndex;

                      return (
                        <li
                          key={itemIndex}
                          className={`${styles.priceItem} ${
                            isSelected
                              ? styles.selected
                              : selectedItem
                              ? styles.collapsed
                              : ''
                          }`}
                          onClick={() =>
                            handleItemClick(categoryIndex, itemIndex)
                          }
                        >
                          <div className="details-container">
                            <span>
                              {item.name} ({item.duration})
                            </span>
                            <span className="price">{item.price}</span>
                          </div>
                          <div className="description-container ">
                            <span className="text-left w-full">
                              {item.description}
                            </span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
        {showAddOns && (
        <section>
          <div className='section-card mx-2'>
            <h2 className="">Add-on services</h2>
            <div className='section-content'>
              <div className='add-on-item'></div>
            </div>
          </div>
        </section>
        )}
    </div>
  );
}