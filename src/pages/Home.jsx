import HeroSection from '../components/HeroSection';
import heroImage from '../assets/heroImage.png';
import ProductInfoData from '../products/ProductInfoData';
import ServiceData from '../services/ServiceData';
import {
    HomePageContainer,
    WhoWeAreContent,
    WhoWeAreText,
    WhoWeAreImageContainer,
    WhoWeAreImage,
    ProductGrid,
    ProductLink,
    ProductItem,
    ServiceGrid,
    ServiceItem,
} from './pages-styles/HomeStyles';

function Home() {
    return (
        <><HeroSection />
            <HomePageContainer>
                <WhoWeAreContent>
                    <WhoWeAreText>
                        <h2>ABOUT US</h2>
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

                <h2>OUR PRODUCTS</h2>
                <ProductGrid>
                    {ProductInfoData.map(product => (
                        <ProductLink key = {product.id} href={`/products/${product.name}`}>
                            <ProductItem>
                                <img src={product.Image} alt={product.name} />
                                <h3>{product.name}</h3>
                            </ProductItem>
                        </ProductLink>
                    ))}
                </ProductGrid>

                <h2>OUR SERVICES</h2>
                <ServiceGrid>
                    {ServiceData.map(service => (
                        <ServiceItem key = {service.id}>
                            <img src={service.Image} alt={service.name} />
                            <h3>{service.name}</h3>
                        </ServiceItem>
                    ))}
                </ServiceGrid>
            </HomePageContainer></>
    );
}


export default Home;