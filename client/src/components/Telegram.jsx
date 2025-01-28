import React from 'react';
import { FaTelegramPlane } from "react-icons/fa";

const TelegramButton = () => {
  const telegramUrl = "https://t.me/your_channel_name"; // Replace with your Telegram channel URL

  return (
    <a 
      href={telegramUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="telegram-btn btn btn-primary rounded-circle position-fixed"
      style={{
        bottom: '20px',
        right: '20px',
        width: '70px',
        height: '70px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '44px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
        backgroundColor: '#0088cc', // Telegram's brand color
        border: 'none',
        zIndex: 1000,
        transition: 'transform 0.3s ease'
      }}
      onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
      onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
    >
      <FaTelegramPlane />
    </a>
  );
};

export default TelegramButton;