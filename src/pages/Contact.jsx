import { FaInstagram, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa';
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
      <PageHeader>CONTACT US</PageHeader>
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
            <div>
              <h2>Port Harcourt Branch (HQ)</h2>
              <p>Km 18, Rumuokoro, Airport Road,</p>
              <p>Igwuruta, Port Harcourt,</p>
              <p>Rivers State, Nigeria</p>
            </div>
            <div className="reachOut">
              <p><FaPhone size={20} /> (+234) 91 6349 1771 </p>
              <p><FaEnvelope size={20} /> <a href="mailto:charlesaluminium@yahoo.com"> charlesaluminium@yahoo.com</a></p>
            </div>
          </div>
          <div className="branch">
            <div>
              <h2>Orlu Branch</h2>
              <p>Km 2, Orlu, Owerri Road,</p>
              <p>Okporo, Imo State,</p>
              <p>Nigeria</p>
            </div>
            <div className="reachOut">
              <p><FaPhone size={20} /> (+234) 90 6798 8466 </p>
            </div>
          </div>
          <div className="branch">
            <div>
              <h2>Uyo Branch</h2>
              <p>Old Stadium Road, by Abak Road,</p>
              <p>Uyo, Akwa-Ibom State,</p>
              <p>Nigeria</p>
            </div>
            <div className="reachOut">
              <p><FaPhone size={20} /> (+234) 80 8118 2659 </p>
            </div>
          </div>
          <div className="followUs">
            <h2>Follow Us</h2>
            {/*<a href="https://www.facebook.com/p/Charles-Aluminium-100064226793845/" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={30} style={{ color: '#1877F2' }} />
            </a>*/}
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
