import Image from "next/image";
import { PiMapPinThin } from "react-icons/pi";
import { CiInstagram } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import Gallery from "../components/Gallery";

export default function Home() {
  return (
    <div className="page-container">
      <header className="border-blur sticky top-0 z-50 w-full">
        <nav className="nav-container bg-[var(--primary)]">
          <ul className="flex flex-row justify-evenly py-2 w-full">
            <li><a href="#" className="nav-link">About</a></li>
            <li><a href="#gallery" className="nav-link">Gallery</a></li>
            <li><a href="#services" className="nav-link">Services</a></li>
            <li><a href="#schedule" className="nav-link">Book Now</a></li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        <section className="hero-section justify-evenly flex flex-row">
          <Image src="/images/hero-avatar.jpg" alt="Acrylics By Magaly" className="rounded-full border-2 border-[var(--secondary)]" width={170} height={170} />
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
        <section className="my-4 gap-4 flex justify-evenly">
          <div className="flex flex-row items-end gap-1">
            <PiMapPinThin className="text-[var(--secondary)] text-3xl" />
            <span className="text-xl font-serif">
              El Cajon, CA
            </span>
          </div>
          <div className="flex flex-row items-end gap-1">
          <a href="https://www.instagram.com/acrylicsbymagaly" target="_blank" rel="noopener noreferrer" className="flex flex-row items-end gap-1 cursor-pointer">
            <CiInstagram className="text-[var(--secondary)] text-3xl" />
            <span className="text-lg font-serif">
              Acrylicsbymagaly
            </span>
          </a>
          </div>
        </section>
        <section className="my-4 gap-4 flex justify-evenly">
          <div className="flex flex-row items-end gap-1">
            <FaPhoneAlt  className="text-[var(--secondary)] text-2xl" />
            <span className="text-lg font-serif">
              (619)389-9702
            </span>
          </div>
          <div className="flex flex-row items-end gap-1">
          <a href="https://www.instagram.com/acrylicsbymagaly" target="_blank" rel="noopener noreferrer" className="flex flex-row items-end gap-1 cursor-pointer">
            <CiMail  className="text-[var(--secondary)] text-3xl" />
            <span className="text-lg font-serif">
              Acrylicsbymagaly
            </span>
          </a>
          </div>
        </section>

        <section className="services-grid">
          <div className="service-card">
            <h3 className="service-title">Hours</h3>
            <div className="service-content flex justify-evenly text-center font-sans font-bold">
              <div>
                <p>Mon - Fri</p>
                <p>10AM - 7PM</p>
              </div>
              <div>
                <p>Sat - Sun</p>
                <p>10AM - 5PM</p>
              </div>
            </div>
          </div>
          <Gallery />

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
            <a href="" id="schedule" className="cta-button">
              Schedule Now
            </a>
          </div>
        </section>
      </main>


    </div>
  );
}