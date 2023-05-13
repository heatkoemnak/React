import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div class="footer-container">
        <div class="footer-menu">
          <div class="footer-menu-item">
            <h2>Menu</h2>
            <Link href="#">Home</Link>
            <Link href="#">About</Link>
            <Link href="#">Service</Link>
            <Link href="#">Product</Link>
            <Link href="#">Contact</Link>
          </div>
          <div class="footer-menu-item">
            <h2>Contact Info</h2>
            <Link href="#">+855 977 304 279</Link>
            <Link href="#">heatkoemnak@gamil.com</Link>
            <Link href="#">Pnom penh,Cambodia-400104</Link>
          </div>
          <div class="footer-menu-item">
            <h2>Follow Us</h2>
            <Link href="#">Facebook</Link>
            <Link href="#">Instagram</Link>
            <Link href="#">Twitter</Link>
            <Link href="#">Youtube</Link>
            <Link href="#">Linkedin</Link>
          </div>
          <div class="footer-menu-item">
            <h2>Legal</h2>
            <Link href="#">Terms of use</Link>
            <Link href="#">Privacy policy</Link>
            <Link href="#">Cookies</Link>
          </div>
        </div>
        <div class="footer-social-media">
          <Link href="#">
            <i class="bx bxl-facebook"></i>
          </Link>
          <Link href="#">
            <i class="bx bxl-instagram"></i>
          </Link>
          <Link href="#">
            <i class="bx bxl-twitter"></i>
          </Link>
          <Link href="#">
            <i class="bx bxl-youtube"></i>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
