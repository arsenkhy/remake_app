import React, { useState } from 'react';
import './Image.css';

const Image = ({ imageURL }) => {
  return (
    <div className="image-container">
      <div className="image-wrapper">
        <img src={imageURL} alt="example" className="image" />
      </div>
    </div>
  );
};

export default Image;