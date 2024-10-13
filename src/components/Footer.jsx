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
                            <p>Km 18, Rumuokoro, Airport Road,</p>
                            <p>Igwuruta, Port Harcourt,</p>
                            <p>Rivers State, Nigeria</p>
                        </div>

                        <div className="reachOut">
                            <p><FaPhone size={20} /> (+234) </p>
                            <p><FaEnvelope size={20} /> <a href="mailto:charlesaluminium@yahoo.com"> charlesaluminium@yahoo.com</a></p>
                        </div>

                        <div>
                            <p>Mon - Fri: 8:00AM - 5:00PM</p>
                            <p>Sat: 8:00AM - 2:00PM</p>
                        </div>
                    </FooterBox>

                    <FooterBox className="quick-links">
                        <FooterTitle>Quick Links</FooterTitle>
                        <div>
                            <p><NavLink href="/">Home</NavLink> </p>
                            <p><NavLink href="/about">About</NavLink></p>
                            <p><NavLink href="/products">Products</NavLink></p>
                            <p><NavLink href="/services">Services</NavLink></p>
                            <p><NavLink href="/contact">Contact</NavLink></p>
                        </div>
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
                © 2024 Charles Aluminium Designed by <a href="https://www.linkedin.com/in/charles-eboson/" target="_blank" rel="noopener noreferrer">CharlesTech Innovations</a>.
            </FooterSignature>
        </>
    );
}

export default Footer;
