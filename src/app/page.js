import Image from "next/image";

export default function Home() {
  return (
    <div className="page-container">
      <header className=" border-b border-slate-700 border-blur sticky top-0 z-50 w-full">
        <nav className="nav-container bg-gradient-to-br from-pink-100 to-pink-200">
          <ul className="flex flex-row justify-evenly py-2 w-full">
            <li><a href="#" className="nav-link hover:text-pink-600">Home</a></li>
            <li><a href="#services" className="nav-link">Services</a></li>
            <li><a href="#gallery" className="nav-link">Gallery</a></li>
            <li><a href="#services" className="nav-link">Services</a></li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        <section className="hero-section justify-evenly flex flex-row">
          <Image src="/images/hero-avatar.jpg" alt="Acrylics By Magaly" className="rounded-full border-2 border-white" width={170} height={170} />
          <h2 className="hero-title dancing-script text-5xl flex flex-col justify-center items-center text-center">
            <p>
              Acrylics
            </p>
            <p>
              by
            </p>
            <p>
              Magaly
            </p>
          </h2>
        </section>

        <section className="services-grid">
          <div className="service-card">
            <h3 className="service-title">Hours</h3>
            <div className="service-content">
              <p>Hours of operation.</p>
            </div>
          </div>
          <div className="service-card">
            <h3 className="service-title">About Magaly</h3>
            <div className="service-content">
              <p>MAGA.</p>
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

        <section className="appointment-section" id="services">
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


    </div>
  );
}