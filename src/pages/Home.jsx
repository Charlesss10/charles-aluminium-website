import HeroSection from '../components/HeroSection';
import ProductInfoData from '../products/ProductInfoData';
import ServiceData from '../services/ServiceData';
// @ts-ignore
import feltVideo from '../assets/feltVideo.mp4';
import feltVideoPoster from '../assets/feltVideoPoster.png';
import {
    HomePageContainer,
    IntroductionContainer,
    AboutUs,
    ProductGrid,
    ProductLink,
    ProductItem,
    ServiceGrid,
    ServiceItem,
    MissionVisionContainer,
    MissionStatement,
    VisionStatement,
    ProductsContainer,
    CharlesFeltVideo
} from './pages-styles/HomeStyles';

function Home() {
    return (
        <><HeroSection />
            <HomePageContainer>
                <IntroductionContainer>
                    <AboutUs>
                        <h2>ABOUT US</h2>
                        <p>
                            We are Charles Aluminium, a premier supplier of roofing sheets and roofing felt, headquartered in Rivers State,
                            with multiple branches throughout Nigeria. Our dedication to excellence and drive for innovation empowers us to
                            provide top-quality solutions that cater to the varied needs of our customers.
                        </p>
                        <p>
                            Charles Aluminium was founded in 2005 by Engr. Chuks Cletus Eboson Igbojionu with the vision of providing aluminium
                            roofing sheets to the low-income class in Nigeria through technological innovations in roofing patterns.
                            Over the years, we have evolved from catering primarily to this segment with short-span aluminium sheets,
                            to expanding our offerings with long-span aluminium sheets, leveraging over 23 years of industry experience
                            as a Production Manager and Chief Engineer at one of Nigeria's leading Aluminium Rolling Mills.
                        </p>
                    </AboutUs>

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
                </IntroductionContainer>

                <h2>OUR PRODUCTS</h2>
                <ProductsContainer>
                    <ProductGrid>
                        {ProductInfoData.map(product => (
                            <ProductLink key={product.id} href={`/products/${product.name}`}>
                                <ProductItem>
                                    <img src={product.Image} alt={product.name} />
                                    <h3>{product.name}</h3>
                                </ProductItem>
                            </ProductLink>
                        ))}
                    </ProductGrid>

                    <CharlesFeltVideo>
                        <video controls width="100%" poster= {feltVideoPoster}>
                            <source src={feltVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </CharlesFeltVideo>
                </ProductsContainer>

                <h2>OUR SERVICES INCLUDE:</h2>
                <ServiceGrid>
                    {ServiceData.map(service => (
                        <ServiceItem key={service.id}>
                            <img src={service.Image} alt={service.name} />
                            <h3>{service.name}</h3>
                        </ServiceItem>
                    ))}
                </ServiceGrid>
            </HomePageContainer></>
    );
}


export default Home;