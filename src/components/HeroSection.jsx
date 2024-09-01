import {
    Hero,
    HeroContent,
    WelcomeTextHeader,
    WelcomeText,
    HeroButtonContainer,
    HeroProductsButton,
} from './components-styles/HeroSectionStyles';

function HeroSection() {
    return (
        <Hero>
            <HeroContent>
                <WelcomeTextHeader>Welcome to Charles Aluminium</WelcomeTextHeader>
                <WelcomeText>Your Partner in Quality Aluminium Products and Nigeria's Leading Roofing Experts. Quality, durability, and excellence in every project.</WelcomeText>
                <HeroButtonContainer>
                    <HeroProductsButton href="/products">Explore our Products </HeroProductsButton>
                </HeroButtonContainer>
            </HeroContent>
        </Hero>
    );
}

export default HeroSection;