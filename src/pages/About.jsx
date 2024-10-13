// @ts-ignore
import feltVideo from '../assets/feltVideo.mp4';
import coo from '../assets/coo.png'
import feltVideoPoster from '../assets/feltVideoPoster.png';
import {
  PageHeaderOuterContainer,
  PageHeader,
  AboutPageContainer,
  WhoWeAreContainer,
  WhoWeAreText,
  MissionVisionContainer,
  MissionStatement,
  VisionStatement,
  TeamContainer,
  CTASection,
  CTASectionLink,
  CharlesTech,
  CharlesFelt,
  CharlesFeltContainer,
  CharlesFeltVideo,
  StyledList
} from './pages-styles/AboutStyles';

function About() {
  return (
    <><PageHeaderOuterContainer>
      <PageHeader>ABOUT US</PageHeader>
    </PageHeaderOuterContainer>
      <AboutPageContainer>

        <MissionVisionContainer>
          <MissionStatement>
            <h2>OUR MISSION</h2>
            <p>
              At Charles Aluminium, our mission is to deliver affordable, high-quality aluminium roofing solutions
              through innovation. We are committed to integrity, customer satisfaction, and supporting local industry.
            </p>
          </MissionStatement>

          <VisionStatement>
            <h2>OUR VISION</h2>
            <p>
              Our vision is to become the leading provider of innovative, locally made roofing products in Nigeria.
              We aim to set new industry standards by embracing technology and driving continuous improvement.
            </p>
          </VisionStatement>
        </MissionVisionContainer>

        <WhoWeAreContainer>
          <WhoWeAreText>
            <h2>WHO WE ARE</h2>
            <p>
              We are Charles Aluminium, a premier supplier of roofing sheets and roofing felt, headquartered in Rivers State,
              with multiple branches throughout Nigeria. Our dedication to excellence and drive for innovation empowers us to
              provide top-quality solutions that cater to the varied needs of our customers.
            </p>

            <p>
              Charles Aluminium was founded in 2005 by Engr. Chuks Cletus Eboson Igbojionu with the vision of providing aluminium
              roofing sheets to the low-income class in Nigeria through technological innovations in roofing patterns.
              Over the years, we have evolved from catering primarily to this segment with short-span aluminium sheets,
              to expanding our offerings with long-span aluminiium sheets, leveraging over 23 years of industry experience
              as a Production Manager and Chief Engineer at one of Nigeria's leading Aluminium Rolling Mills.
            </p>
          </WhoWeAreText>
          <CharlesTech>
            <h2>CHARLESTECH ROOF TILES</h2>
            <p>
              Our consistent efforts to improve roofing methods have established Charles Aluminium
              as a leading name in the roofing industry across Nigeria. We are recognized for our signature product,
              CHARLESTECH ROOF TILES, which combine the aesthetic appeal of steel stone-coated roofing with several advantages, including:
            </p>
            <StyledList>
              <li>Non-color fading properties</li>
              <li>Lighter weight compared to steel stone-coated alternatives</li>
              <li>Superior color longevity without algae growth</li>
              <li>Water from the roof is not hazardous to health</li>
              <li>Locally manufactured in Nigeria, conserving foreign exchange reserves</li>
            </StyledList>
          </CharlesTech>
        </WhoWeAreContainer>

        <CharlesFeltContainer>
          <CharlesFelt>
            <h2>CHARLES ROOF FELT MEMBRANE</h2>
            <p>
              We have also ventured into the production of BITUMINOUS ROOFING FELT,
              known as CHARLES ROOF FELT MEMBRANE, which uses locally sourced materials.
              Unlike imported roofing felt, our membrane is designed without polyethylene on both sides
              to ensure it adheres firmly to aluminium roofing sheets, sealing nail holes effectively.
              Imported alternatives, which retain a polyethylene layer, are more suited for decking rather than aluminium roofing,
              leading to potential leaks over time. With Charles Roof Felt Membrane, our clients are assured of leak-free roofing for many years.
            </p>
            <p>
              For a closer look at how our CHARLES ROOF FELT MEMBRANE performs, please watch the video provided.
            </p>
          </CharlesFelt>
          <CharlesFeltVideo>
            <video controls width="100%" poster= {feltVideoPoster}>
              <source src={feltVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </CharlesFeltVideo>
        </CharlesFeltContainer>

        <TeamContainer>
          <div>
            <img src={coo} alt="COO" />
            <h3>Engr. Chuks Cletus Eboson Igbojionu</h3>
          </div>
          <div>Chief Operating Officer, Founder</div>
        </TeamContainer>

        <CTASection>
          <h2>Want to know more?</h2>
          <CTASectionLink href="/contact">Get in Touch</CTASectionLink>
        </CTASection>

      </AboutPageContainer></>
  );
}

export default About;