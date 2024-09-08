import heroImage from '../assets/heroImage.png';
import ServiceData from '../services/ServiceData';
import {
    PageHeaderOuterContainer,
    PageHeader,
    ServicesPageContainer,
    IntroContent,
    IntroText,
    IntroImageContainer,
    IntroImage,
    ServiceGrid,
    ServiceItem,
    CTASection,
    CTASectionLink,
} from './pages-styles/ServicesStyles';

const ServicesPage = () => {
    return (
        <><PageHeaderOuterContainer>
            <PageHeader>OUR SERVICES</PageHeader>
        </PageHeaderOuterContainer>
            <ServicesPageContainer>
                <IntroContent>
                    <IntroText>
                        <h2>DELIVERING QUALITY AND EXPERTISE</h2>
                        <p>
                            At our company, we are committed to providing top-notch services tailored to meet your unique needs.
                            Our team of professionals ensures that every project is handled with precision and care, from initial consultation to final implementation.
                        </p>
                    </IntroText>
                    <IntroImageContainer>
                        <IntroImage src={heroImage} alt="Our Services" />
                    </IntroImageContainer>
                </IntroContent>

                <h2>SERVICES</h2>
                <ServiceGrid>
                    {ServiceData.map(service => (
                        <ServiceItem>
                            <img src={service.Image} alt={service.name} />
                            <h3>{service.name}</h3>
                        </ServiceItem>
                    ))}
                </ServiceGrid>

                <CTASection>
                    <h3>For more information or inquiries, feel free to contact us, and we will be happy to assist you.</h3>
                    <CTASectionLink href="/contact">Contact Us</CTASectionLink>
                </CTASection>
            </ServicesPageContainer></>
    );
};

export default ServicesPage;
