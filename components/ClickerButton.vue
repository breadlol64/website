<template>
    <div>
      <button class="circle-btn" aria-label="Circle Button">
          <img src="/public/bober.png" alt="Button Icon">
      </button>
    </div>
  </template>
  
  <style>
      .circle-btn {
          width: 300px;
          height: 300px;
          border-radius: 50%;
          overflow: hidden;
          border: none;
          padding: 0;
          background: none;
          -webkit-tap-highlight-color: transparent;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.3s ease; /* Added transition for box-shadow */
          
          /* Adding subtle default glow */
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
      }
      
      .circle-btn:hover {
          transform: scale(1.05);
          /* Adding stronger glow effect on hover */
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.6),
                     0 0 40px rgba(255, 255, 255, 0.4);
      }
      
      .circle-btn:active {
          transform: scale(0.9);
          /* Optional: different glow for active state */
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
      }
      
      .circle-btn img {
          width: 100%;
          height: 100%;
          object-fit: cover;
      }
  </style>