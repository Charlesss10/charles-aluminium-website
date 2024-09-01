import heroImage from '../assets/heroImage.png';
import CEO from '../assets/CEO.png';
import {
  AboutPageContainer,
  PageHeader,
  WhoWeAreContent,
  WhoWeAreText,
  WhoWeAreImageContainer,
  WhoWeAreImage,
  MissionStatement,
  VisionStatement,
  ValuesContainer,
  Value,
  TeamContainer,
  CTASection,
  CTASectionLink
} from './pages-styles/AboutStyles';

function About() {

  return (
    <AboutPageContainer>
      <PageHeader>WHO WE ARE</PageHeader>
        <WhoWeAreContent>
          <WhoWeAreText>
            <p>
              We are Charles Aluminium, a premier supplier of roofing sheets and roofing felt,
              headquartered in Rivers State with multiple branches throughout Nigeria.
              Our dedication to excellence and drive for innovation empower us to provide
              top-quality solutions that cater to the varied needs of our customers.
            </p>

            <p>
              Charles Aluminium was founded in [year of establishment] by Engr. Cletus Chuks Igbojionu
              with the vision to [briefly describe the initial vision or purpose of starting the company].
              Over the years, we have grown from [mention how your company started, e.g., a small startup or a local business]
              into [mention your current status, e.g., a recognized leader in the industry, a trusted name among clients, etc.].
            </p>

            <p>
              Our journey has been marked by
              [mention key milestones, such as new product launches,
              market expansions, partnerships, awards, etc.].
              Through it all, we have remained committed to quality, customer satisfaction.
            </p>
          </WhoWeAreText>
          <WhoWeAreImageContainer>
            <WhoWeAreImage src={heroImage} alt="About us" />
          </WhoWeAreImageContainer>
        </WhoWeAreContent>

      <h2>OUR MISSION</h2>
      <MissionStatement>
        <p>At Charles Aluminium, our mission is to [state your mission clearly].
          We believe in [mention key values or philosophies, such as integrity, customer satisfaction, innovation, etc.].
          Our goal is to [describe what you aim to achieve for your customers, employees, and the broader community].</p>
      </MissionStatement>

      <h2>OUR VISION</h2>
      <VisionStatement>
        <p>Our vision is to [describe your company's long-term goals or vision].
          We aspire to [mention any long-term aspirations, such as becoming a market leader, driving innovation, improving customer experiences, etc.].
          By [mention how you plan to achieve this vision, e.g., continuously improving our products, embracing cutting-edge technology, etc.],
          we aim to [mention the impact you hope to have on your industry or community].</p>
      </VisionStatement>

      <h2>OUR VALUES</h2>
      <ValuesContainer>
        <Value>
          <h3>Quality</h3>
          <p>We take pride in delivering high-quality products and services that stand the test of time.</p>
        </Value>
        <Value>
          <h3>Innovation</h3>
          <p>We are committed to innovation and continually seek new ways to improve our products and services.</p>
        </Value>
        <Value>
          <h3>Integrity</h3>
          <p>We uphold the highest standards of integrity in all our actions</p>
        </Value>
      </ValuesContainer>

      <TeamContainer>
        <img src={CEO} alt="CEO" />
        <h3>Engr. Cletus Chuks Igbojionu</h3>
        <div>CEO, Founder</div>
      </TeamContainer>

      <CTASection>
        <h2>Want to know more?</h2>
        <CTASectionLink to="/contact">Get in Touch</CTASectionLink>
      </CTASection>

    </AboutPageContainer>
  );
}

export default About;