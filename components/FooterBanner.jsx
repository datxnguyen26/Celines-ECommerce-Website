import React, { useState } from 'react';
import { AiFillFacebook } from 'react-icons/ai';
import { client } from '../client';
import logo from '../public/mobile.png';

const FooterBanner = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', option: '', orders: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, phone, option, orders } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'orders',
      name: formData.username,
      phone: formData.phone,
      option: formData.option,
      orders: formData.orders,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log("DID NOT GO THR!"));
  };

  return (
    <>
      <h2 className="head-text">Place your order here</h2>

      <div className="app__footer-cards">
        
        <div className="app__footer-card ">
          <a href="https://www.facebook.com/profile.php?id=100014705834221" target="_blank">
          <img src="/facebook.png" alt="facebook" height={40} width={40} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100014705834221" target="_blank" className="p-text">Katie Vo</a>
        </div>
        
        <div className="app__footer-card">
          <img src="/mobile.png" alt="phone" height={40} width={40} />
          <a href="tel:+1 (909) 569-8093" className="p-text">+1 (909) 630-8862</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <h2 style={{color: 'red'}}>We are currently only accepting orders for pick-up or delivery.</h2>
          <h2 style={{color: 'red'}}>Orders are ready to be picked-up or delivered on Saturday/Sunday if the order is made 2 days before the pick-up date.</h2>
          <h2 style={{color: 'red'}}>PAY WHEN YOU RECEIVE THE PRODUCT!!!</h2>
   
   
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="phone" placeholder="Your phone number" name="phone" value={phone} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <textarea className="p-text" style={{height: 260}} placeholder="How would you like to receive the product?&#10;Option 1. Pick up at 4742 Canoga St. Apt 4, Montclair, CA 91763. (Please specify the time for pick-up)&#10;Option 2. Deliver to your house if you live around the OC or Montclair/Ontario area.&#10;Please provide your address if you select option 2." name="option" value={option} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Orders&#10;Example:&#10;3x Coconut Jelly (cup)&#10;5x Coconut Jelly (fruit)&#10;20x Flan&#10;etc..."
              value={orders}
              name="orders"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Order' : 'Sending...'}</button>
        </div>
      ) : (
        <div>
          <h2 className="head-text">
            Thank you for your purchase!
          </h2>
          <h5 className="head-text">
            We will send out a confirmation text message shortly.
          </h5>
        </div>
      )}
    </>
  );
};

export default FooterBanner;