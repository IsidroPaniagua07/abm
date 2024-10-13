import Image from "next/image";
import { PiMapPinFill  } from "react-icons/pi";
import { CiInstagram } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import Gallery from "../components/Gallery";
import Link from 'next/link';
import React from 'react';
import PriceList from '../components/PriceList';

export default function Home() {
  const priceItems = [
    { title: 'Basic Plan', price: '$9.99/mo', description: 'Essential features for individuals' },
    { title: 'Pro Plan', price: '$19.99/mo', description: 'Advanced features for professionals' },
    { title: 'Enterprise Plan', price: '$49.99/mo', description: 'Full suite for large organizations' },
  ];

  return (
    <div className="page-container">
      <main className="main-content">
        <section className="hero-section justify-evenly flex flex-row">
          <Image src="/images/hero-avatar.jpg" alt="Acrylics By Magaly" className="hero-avatar " width={170} height={170} />
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
            <PiMapPinFill  className="react-icons" />
            <span className="text-xl font-serif">
              El Cajon, CA
            </span>
          </div>
          <div className="flex flex-row items-end gap-1">
          <a href="https://www.instagram.com/acrylicsbymagaly" target="_blank" rel="noopener noreferrer" className="flex flex-row items-end gap-1 cursor-pointer">
            <CiInstagram className="react-icons" />
            <span className="text-lg font-serif">
              Acrylicsbymagaly
            </span>
          </a>
          </div>
        </section>

        <section className="sections-grid">
          <div className="section-card">
            <h3 className="section-title">Hours</h3>
            <div className="section-content flex justify-evenly font-bold text-center font-sans w-full">
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

          <div className="section-card">
            <h3 className="section-title">Booking Policy</h3>
            <div className="section-content font-bold">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <h4 className="">Guests</h4>
                  <p className="text-sm">
                    Extra guests are not allowed at this time, unless they are being serviced or require adult supervision.
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-bold">Cancellations</h4>
                  <p className="text-sm">
                    You may cancel or reschedule 48 hours before your appointment date.
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-bold">Deposits</h4>
                  <p className="text-sm">
                    New clients must send a $10 deposit via Venmo or Zelle to secure their appointment.
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-bold">Late Policy</h4>
                  <p className="text-sm">

                    After a 15 minute grace period, a late fee of $10 will be applied to your total.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="section-card">
          <h3 className="section-title">Contact</h3>
          <div className="section-content flex flex-col items-start gap-4">
            <div className="flex flex-row items-end gap-1">
              <FaPhoneAlt  className="text-[28px] pl-[4px] mr-[8px] react-icons" />
              <span className="text-lg font-serif filter-shadow">
                (619) 389-9702
              </span>
            </div>
            <div className="flex flex-row items-end gap-1">
              <CiMail  className="text-3xl mr-[8px] react-icons" />
              <span className="text-lg font-serif filter-shadow">
                cynthiafiscal9@gmail.com
              </span>
            </div>
            </div>
          </div>

        </section>

   
          <div className="cta-container">
            <Link href="/schedule" className="cta-button">
              Schedule Now
            </Link>
          </div>

      </main>
    </div>
  );
}