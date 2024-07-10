import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './Homescreen.css';
import { Link } from 'react-router-dom';

const Homescreen = () => {




  return (
    <div>
  
      <motion.div
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className='backg'
        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      >
        {/* Your content here */}
      </motion.div>

      <div className='title' id='playground'>
        <h1>
          ECO <br />
          CONCIOUS <br /> CANDLES
        </h1>
        <div className='scroll-arrow'>
          <span>  WELCOME!</span>
          <div className='arrow'></div>
        </div>
      </div>
    </div>
  );
};

export default Homescreen;
