import React from 'react';
import { motion } from 'framer-motion';
import './perfumes.css';
import leaf from '/Users/ramakant/Desktop/candles/candle/src/assets/red leaf.png';
import Image1 from '/Users/ramakant/Desktop/candles/candle/src/assets/img1.PNG';
import Image2 from '/Users/ramakant/Desktop/candles/candle/src/assets/img2.PNG';
import Image3 from '/Users/ramakant/Desktop/candles/candle/src/assets/img3.PNG';
import Image4 from '/Users/ramakant/Desktop/candles/candle/src/assets/img4.PNG';

const Perfumes = () => {
  const slideIn = {
    hidden: { x: '-100vw' },
    visible: { x: 0, transition: { duration: 0.9 } }
  };

  return (
    <motion.div 
      className='perfumes'
      initial="hidden"
      animate="visible"
      variants={slideIn}
    >
      <section className='section1'>
        <div className='image1'>
          <img src={leaf} className="red-leaf" />
        </div>
        <div className='content2'>
          <div className='left-text'>
            <h1 className='text1'>MELT MY MOOD IS <span style={{ color: 'red' }}>CRAFTING ECO-CONSCIOUS CANDLES</span> THAT ENHANCE LIFE WITH ENCHANTING FRAGRANCES AND <span style={{ color: 'red' }}>SUSTAINABLE PRACTICES.</span>
            </h1>
            <p>With thoughtfully sourced materials, understated design choices, -
              with elegant typography and carefully placed colorful illustrations - and focus on sustainability at every step, their brand is dedicated to curating moments of tranquility while upholding a deep commitment to environmental responsibility. Each offering a sensory journey that harmonizes with both the soul and the planet.</p>
            <img src={Image2} className="img2" />
          </div>
          <div className='right-text'>
            <img src={Image1} className="img1" />
          </div>
        </div>
      </section>
      <section className='section2'>
        <div className='content3'>
          <div className='left-text2'>
            <img src={Image3} className="img3" />
          </div>
          <div className='right-text2'>
            <h1 className='text1'>WE METICULOUSLY <span style={{ color: 'green' }}>SELECT INGREDIENTS</span> THAT ALIGN WITH OUR COMMITMENT TO <span style={{ color: 'green' }}>SUSTAINABILITY AND ETHICAL</span> PRACTICES.</h1>
            <p>Elegant typography and carefully placed colorful illustrations further enrich our brand's identity. Each element of our packaging and branding reflects our passion for beauty and mindfulness, inviting you to indulge in a sensory experience that begins the moment you receive our products.</p>
            <img src={Image4} className="img4" />
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default Perfumes;
