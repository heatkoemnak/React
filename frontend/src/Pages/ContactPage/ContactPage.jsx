import React from 'react';
import './contact.css';
import {
  FaFacebook,
  FaInstagram,
  FaTwitterSquare,
  FaLinkedin,
  FaPhoneAlt,
  FaAddressBook,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function ContactPage() {
  return (
    <div className="main-contact">
      <h1 className="header-title">Contact</h1>
      <div className="contact">
        <h3 className="title">Let's get in touch</h3>
        <p>We are open for any suggestion or just to have a chat</p>

        <div className="contact-form">
          <div className="contact-info">
            <div className="info">
              <div className="information">
                <FaPhoneAlt />
                <p>0123456789</p>
              </div>
              <div className="information">
                <MdEmail />
                <p>
                  <Link to="/email">heatkimnak@gmail.com</Link>
                </p>
              </div>
              <div className="information">
                <FaAddressBook />
                <p>123, ABC Street, XYZ City, State, Pincode</p>
              </div>
            </div>
            <div className="social-media">
              <p>Connect with us :</p>
              <div className="social-icons">
                <a href="https://www.facebook.com/" target="_blank">
                  <FaFacebook />
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                  <FaInstagram />
                </a>
                <a href="https://www.twitter.com/" target="_blank">
                  <FaTwitterSquare />
                </a>
                <a href="https://www.linkedin.com/" target="_blank">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
          <div className="contact-info-form">
            <h3 className="title">Contact us</h3>
            <form action="mailto: <EMAIL>" method="post" enctype="text/plain">
              <div className="input-container">
                <label for="">Username</label>
                <input type="text" name="name" className="input" />
              </div>
              <div className="input-container">
                <label for="">Email</label>
                <input type="email" name="email" className="input" />
              </div>
              <div className="input-container">
                <label for="">Phone</label>
                <input type="tel" name="phone" className="input" />
              </div>
              <div className="input-container textarea">
                <label for="">Message</label>
                <textarea name="message" className="input"></textarea>
              </div>
              <input type="submit" value="Send" className="btn" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
