import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa';
import {
    FooterOuterContainer,
    FooterContainer,
    FooterBox,
    FooterTitle,
    FooterLink,
    SocialIcon,
    SocialIconContainer,
    FooterSignature
} from './components-styles/FooterStyles';

function Footer() {
    return (
        <FooterOuterContainer>
            <FooterContainer>

                <FooterBox className="head-office">
                    <FooterTitle>Head Office</FooterTitle>
                    <div className="icon-text">
                        <p>
                            <div>Km 18, Rumuokoro, Airport Road,</div>
                            <div>Igwuruta, Port Harcourt,</div>
                            <div>Rivers State, Nigeria</div>
                        </p>
                    </div>

                    <div className="reachOut">
                        <p><FaPhone size={20} /> +234 80 3407 0479 </p>
                        <p><FaEnvelope size={20} /> <a href="mailto:cigbojionu12@yahoo.com"> cigbojionu12@yahoo.com</a></p>
                    </div>

                    <p>
                        <div>Mon - Fri: 8:00AM - 5:00PM</div>
                        <div>Sat: 8:00AM - 2:00PM</div>
                    </p>
                </FooterBox>

                <FooterBox className="quick-links">
                    <FooterTitle>Quick Links</FooterTitle>
                    <p>
                        <FooterLink to="/">Home</FooterLink>
                        <FooterLink to="/about">About</FooterLink>
                        <FooterLink to="/products">Products</FooterLink>
                        <FooterLink to="/services">Services</FooterLink>
                        <FooterLink to="/contact">Contact</FooterLink>
                    </p>
                </FooterBox>

                <FooterBox className="follow-us">
                    <FooterTitle>Follow Us</FooterTitle>
                    <SocialIconContainer>
                        <SocialIcon href="https://www.facebook.com/p/Charles-Aluminium-100064226793845/" target="_blank">
                            <FaFacebook size={24} />
                        </SocialIcon>
                        <SocialIcon href="https://www.instagram.com/charles_aluminium_company/" target="_blank">
                            <FaInstagram size={24} />
                        </SocialIcon>
                        <SocialIcon href="https://www.linkedin.com/company/charles-aluminium/about/" target="_blank">
                            <FaLinkedin size={24} />
                        </SocialIcon>
                    </SocialIconContainer>
                </FooterBox>

            </FooterContainer>

            <FooterSignature>
                © 2024 Charles Aluminium Designed by <a href="https://www.linkedin.com/in/charles-eboson/" target="_blank" rel="noopener noreferrer">Charless10</a>.
            </FooterSignature>

        </FooterOuterContainer>
    );
}

export default Footer;
