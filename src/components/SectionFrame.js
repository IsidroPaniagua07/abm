import React from 'react';

const SectionFrame = ({ title, children }) => {
  return (
    <div className="section-frame">
      <div className="frame-title">{title}</div>
      <div className="frame-content">{children}</div>
    </div>
  );
};

export default SectionFrame;