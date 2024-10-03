'use client'

import { useState } from "react";
import Image from "next/image";

function Modal({ src, alt, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center" onClick={onClose}>
      <div className="relative">
        <Image src={src} alt={alt} width={600} height={600} className="max-w-full max-h-[90vh] object-contain" />
        <button className="absolute top-2 right-2 text-white text-2xl" onClick={onClose}>&times;</button>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [modalImage, setModalImage] = useState(null);

  return (
    <>
      <div className="service-card">
        <h3 className="service-title">Gallery</h3>
        <div className="service-content" id="gallery">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <Image
                key={num}
                src={`/images/nails${num}.jpg`}
                alt={`Nail art design ${num}`}
                width={200}
                height={200}
                className="w-full h-auto rounded-lg cursor-pointer"
                onClick={() => setModalImage(`/images/nails${num}.jpg`)}
              />
            ))}
          </div>
        </div>
      </div>

      {modalImage && (
        <Modal
          src={modalImage}
          alt="Enlarged nail art design"
          onClose={() => setModalImage(null)}
        />
      )}
    </>
  );
}
