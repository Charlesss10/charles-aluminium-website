import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { ContactPageContainer, Header, MapContainer, FormAndSocialContainer, FormContainer, SocialContainer, BranchesContainer } from './pages-styles/ContactStyles';

function ContactPage() {
  return (
    <ContactPageContainer>
      {/* General Header */}
      <Header>CONTACT</Header>

      {/* Map Section */}
      <MapContainer>
        <iframe
          title="Company Location"
          src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.0025729162517!2d7.005177675676517!3d4.939208239542333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069d3d178527687%3A0x940cd45bb2eb538!2sCharles%20Aluminium!5e0!3m2!1sen!2sde!4v1725007856016!5m2!1sen!2sde"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </MapContainer>

      {/* Contact Form and Social Media Section */}
      <FormAndSocialContainer>
        <FormContainer>
          <h2>Send Us A Message</h2>
          <form>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <input type="text" name="phone" placeholder="Your Phone Number" />
            <input type="text" name="subject" placeholder="Subject" />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </FormContainer>

        <SocialContainer>
          <h2>Follow Us</h2>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook size={30} /></a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram size={30} /></a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} /></a>
        </SocialContainer>
      </FormAndSocialContainer>

      {/* Branch List Section */}
      <BranchesContainer>
        <div className="branch">
          <h3>Port Harcourt Branch</h3>
          <p>Address: Km 18, Rumuokoro, Airport Road, Igwuruta, Port Harcourt, Rivers State, Nigeria</p>
          <p>Phone: +234 80 3407 0479</p>
        </div>
        <div className="branch">
          <h3>Orlu Branch</h3>
          <p>Address: [Branch 2 Address]</p>
          <p>Phone: [Branch 2 Phone]</p>
        </div>
        <div className="branch">
          <h3>Uyo Branch</h3>
          <p>Address: [Branch 3 Address]</p>
          <p>Phone: [Branch 3 Phone]</p>
        </div>
      </BranchesContainer>
    </ContactPageContainer>
  );
}

export default ContactPage;
