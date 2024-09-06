import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa';
import {
    FooterContainer,
    FooterBox,
    FooterTitle,
    SocialIcon,
    SocialIconContainer,
    FooterSignature,
    NavLink
} from './components-styles/FooterStyles';

function Footer() {
    return (
        <>
            <FooterContainer>
                <div className="inner-footer">

                    <FooterBox className="head-office">
                        <FooterTitle>Head Office</FooterTitle>
                        <div>
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
                            <div><NavLink href="/">Home</NavLink> </div>
                            <div><NavLink href="/about">About</NavLink></div>
                            <div><NavLink href="/products">Products</NavLink></div>
                            <div><NavLink href="/services">Services</NavLink></div>
                            <div><NavLink href="/contact">Contact</NavLink></div>
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
                </div>

            </FooterContainer>

            <FooterSignature>
                © 2024 Charles Aluminium Designed by <a href="https://www.linkedin.com/in/charles-eboson/" target="_blank" rel="noopener noreferrer">Charless10</a>.
            </FooterSignature>
        </>
    );
}

export default Footer;
