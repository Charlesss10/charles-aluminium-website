import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa';
import {
  PageHeaderOuterContainer,
  PageHeader,
  ContactPageContainer,
  MapContainer,
  ContactDetailsContainer,
} from './pages-styles/ContactStyles';

function ContactPage() {
  return (
    <><PageHeaderOuterContainer>
      <a href='/contact' style={{ textDecoration: 'none' }}>
        <PageHeader>CONTACT US</PageHeader>
      </a>
    </PageHeaderOuterContainer>
      <ContactPageContainer>
        <MapContainer>
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.0025729162517!2d7.005177675676517!3d4.939208239542333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069d3d178527687%3A0x940cd45bb2eb538!2sCharles%20Aluminium!5e0!3m2!1sen!2sde!4v1725007856016!5m2!1sen!2sde"
            width="100%"
            height="200"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </MapContainer>

        <ContactDetailsContainer>
          <div className="branch">
            <h2>Port Harcourt Branch</h2>
            <p>
              <div>Km 18, Rumuokoro, Airport Road,</div>
              <div>Igwuruta, Port Harcourt,</div>
              <div>Rivers State, Nigeria</div>
            </p>
          </div>
          <div className="branch">
            <h2>Orlu Branch</h2>
            <p>[Branch 2 Address]</p>
          </div>

          <div className="branch">
            <h2>Uyo Branch</h2>
            <p>[Branch 3 Address]</p>
          </div>

          <div className="reachOut">
            <h2>Reach Out</h2>
            <p><FaPhone size={20} /> (+234) 8034 070479 </p>
            <p><FaEnvelope size={20} /> <a href="mailto:cigbojionu12@yahoo.com"> cigbojionu12@yahoo.com</a></p>
          </div>

          <div className="followUs">
            <h2>Follow Us</h2>
            <a href="https://www.facebook.com/p/Charles-Aluminium-100064226793845/" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={30} style={{ color: '#1877F2' }} />
            </a>
            <a href="https://www.instagram.com/charles_aluminium_company/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} style={{ color: '#E4405F' }} />
            </a>
            <a href="https://www.linkedin.com/company/charles-aluminium/about/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} style={{ color: '#0A66C2' }} />
            </a>
          </div>
        </ContactDetailsContainer>

      </ContactPageContainer></>
  );
}

export default ContactPage;
