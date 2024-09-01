import productData from '../products/productData';
import {
    ProductPageContainer,
    PageHeader,
    Introduction,
    ProductGrid,
    ProductItem,
    ProductLink,
    CTASection,
    CTASectionLink
} from './pages-styles/ProductsStyles';

const ProductPage = () => {
    return (
        <ProductPageContainer>
            <PageHeader>OUR PRODUCTS</PageHeader>

            <Introduction>
                At our company, we strive to provide the highest quality products to meet your needs. Our commitment to excellence ensures you receive the best value for your investment.
            </Introduction>

            <ProductGrid>
                {productData.map((product) => (
                    <ProductLink to={`/products/${product.id}`}>
                        <ProductItem>
                            <img src={product.Image} alt={product.name} />
                            <h3>{product.name}</h3>
                        </ProductItem>
                    </ProductLink>
                ))}
            </ProductGrid>

            <CTASection>
                <h3>We don’t just provide you with quality products, but also quality services, including installation and post-installation support.</h3>
                <CTASectionLink to="/services">Learn More About Our Services</CTASectionLink>
            </CTASection>
        </ProductPageContainer>
    );
};

export default ProductPage;