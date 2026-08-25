import React from 'react';

const QLogo = ({ className = "" }) => (
  <svg 
    viewBox="0 0 100 100" 
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M43.7 12.3L23.4 32.6C21 35 20 38.3 20 41.7V62.8C20 72 27.5 79.5 36.7 79.5H53.6L76.5 100.8C79.8 103.9 85.3 101.6 85.3 97V76.9C87.4 73.5 88.6 69.4 88.6 65V31.5C88.6 20.9 80 12.3 69.4 12.3H43.7zM40.9 33.5H62.2C65.5 33.5 68.2 36.2 68.2 39.5V57.3L52 73.5H39C35.7 73.5 33 70.8 33 67.5V41.4L40.9 33.5z" />
  </svg>
);

export default QLogo;
