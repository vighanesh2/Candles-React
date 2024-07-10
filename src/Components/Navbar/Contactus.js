import React from 'react'
import '../Navbar/Contactus.css';
import Image89 from '../../assets/contact-imag.png';
import { motion } from 'framer-motion';

const Contactus = () => {
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
    <div className='contact'>
  
     <div className='c-bottom'><img className='image-b' src={Image89}/>


</div>
    <div className='section3'>

 
    <div className='c-left'>

    
    <h1 className='c'>Contact.</h1>
    <p>With our Swiss scented candles, you can bring a piece of Switzerland home with you and share it with those you love. Thank you for considering us for your gift-giving needs. We hope you enjoy our products as much as we enjoyed creating them for you.</p>
    <h1 className='c'>For retailers and stores.</h1>
    <p>We would be happy to offer you our candles in addition to our current retailers. Together with the products you will also receive the necessary POS materials (customization available), as well as the mentions in our media promotion. Contact us for more information!</p>
    <p className='red-t'>Download our presentation for retailers.</p>
    </div>
    <div className='c-right'>
    <div class="container">
    <div class="cta-form">
      <h2>Fill out the form!</h2> 
    </div>
    <form action="" class="form">
      
      <input type="text" placeholder="Name" class="form__input" id="name" />
      <label for="name" class="form__label">Name</label>

      <input type="email" placeholder="Email" class="form__input" id="email" />
      <label for="email" class="form__label">Email</label>

      <input type="text" placeholder="Subject" class="form__input" id="subject" />
      <label for="subject" class="form__label">Subject</label>
      
    </form>
  </div>
 
    </div>
    </div>
 
    </div>
    </motion.div>
  )
}

export default Contactus
