import Image from "next/image";

export default function Home() {
  return (
    <div className="page-container">
      <header className="header">
        {/* <nav className="nav-container">
          <h1 className="logo">Magaly's Nails</h1>
          <ul className="nav-links">
            <li><a href="#" className="nav-link">Home</a></li>
            <li><a href="#" className="nav-link">Services</a></li>
            <li><a href="#" className="nav-link">Gallery</a></li>
            <li><a href="#" className="nav-link">Contact</a></li>
          </ul>
        </nav> */}
      </header>

      <main className="main-content">
        <section className="hero-section">
          <h2 className="hero-title">Acrylics By Magaly</h2>
          <p className="hero-subtitle">Experience luxury nail care in a serene environment</p>
        </section>

        <section className="services-grid">
          <div className="service-card">
            <h3 className="service-title">Contact</h3>
            <div className="service-content">
              <p>Pamper your hands with our expert manicure services.</p>
            </div>
          </div>
          <div className="service-card">
            <h3 className="service-title">Hours</h3>
            <div className="service-content">
              <p>Treat your feet to a relaxing and rejuvenating pedicure.</p>
            </div>
          </div>
          <div className="service-card">
            <h3 className="service-title">About Magaly</h3>
            <div className="service-content">
              <p>Express yourself with our creative and stunning nail art designs.</p>
            </div>
          </div>
          <div className="service-card">
            <h3 className="service-title">Gallery</h3>
            <div className="service-content">
              <p>Express yourself with our creative and stunning nail art designs.</p>
            </div>
          </div>
          <div className="service-card">
            <h3 className="service-title">Booking Policy</h3>
            <div className="service-content">
              <p>Express yourself with our creative and stunning nail art designs.</p>
            </div>
          </div>

        </section>

        <section className="appointment-section">
          <h2 className="section-title">Book Your Appointment</h2>
          <div className="price-grid">
            <div className="price-card">
              <h3 className="price-category">Full Set</h3>
              <ul className="price-list">
                <li className="price-item">
                  <span>Short Full Set (3 hours)</span>
                  <span className="price">$50.00</span>
                </li>
                <li className="price-item">
                  <span>Medium Full Set (3 hours 40 minutes)</span>
                  <span className="price">$60.00</span>
                </li>
                <li className="price-item">
                  <span>Long Full Set (4 hours)</span>
                  <span className="price">$70.00</span>
                </li>
                <li className="price-item">
                  <span>XL Full Set (4 hours 40 minutes)</span>
                  <span className="price">$80.00</span>
                </li>
              </ul>
            </div>
            <div className="price-card">
              <h3 className="price-category">Fill & Other Services</h3>
              <ul className="price-list">
                <li className="price-item">
                  <span>Short Fill (2 hours)</span>
                  <span className="price">$40.00</span>
                </li>
                <li className="price-item">
                  <span>Medium Fill (2 hours 40 minutes)</span>
                  <span className="price">$50.00</span>
                </li>
                <li className="price-item">
                  <span>Long Fill (3 hours 20 minutes)</span>
                  <span className="price">$60.00</span>
                </li>
                <li className="price-item">
                  <span>X-LONG Fill (3 hours 40 minutes)</span>
                  <span className="price">$70.00</span>
                </li>
                <li className="price-item">
                  <span>Soak Off (1 hour 30 minutes)</span>
                  <span className="price">$15.00</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="cta-container">
            <a href="#" className="cta-button">
              Schedule Now
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2023 Glamour Nails. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}