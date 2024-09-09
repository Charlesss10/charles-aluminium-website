import { useParams } from 'react-router-dom';
import ProductInfoData from '../products/ProductInfoData';
import {
  PageHeaderOuterContainer,
  PageHeader,
  ProductPageContainer,
  ProductInfo,
  ProductDescription,
  ProductImageContainer,
  ProductImage,
  OtherProductsGrid,
  OtherProductsItem,
  CTASection,
  CTASectionLink,
  OtherProductLink
} from './pages-styles/ProductDataStyles';

const ProductData = () => {
  const { productName } = useParams();
  const product = ProductInfoData.find((product) => product.name === productName); // Find the specific product

  if (!product) {
    return (
      <><PageHeaderOuterContainer>
        <a href={`/products`} style={{ textDecoration: 'none' }}>
          <PageHeader>OUR PRODUCTS</PageHeader>
        </a>
      </PageHeaderOuterContainer><h2>Product not found!</h2></>
    );
  }

  const otherProducts = ProductInfoData.filter((p) => p.name !== product.name); // Filter out the current product from the "Other Products" list

  return (
    <><PageHeaderOuterContainer>
      <PageHeader>{product.name}</PageHeader>
    </PageHeaderOuterContainer>

      <ProductPageContainer>
        <ProductInfo>
          <ProductDescription>
            <h2>DESCRIPTION</h2>
            <p>{product.description}</p>
          </ProductDescription>
          <ProductImageContainer>
            <ProductImage src={product.Image} alt={product.name} />
          </ProductImageContainer>
        </ProductInfo>

          <h2>OTHER PRODUCTS</h2>
          <OtherProductsGrid>
            {otherProducts.map(otherProduct => (
              <OtherProductLink key={otherProduct.id} href={`/products/${otherProduct.name}`}>
                <OtherProductsItem>
                  <img src={otherProduct.Image} alt={otherProduct.name} />
                  <h3>{otherProduct.name}</h3>
                </OtherProductsItem>
              </OtherProductLink>
            ))}
          </OtherProductsGrid>

        <CTASection>
          <h3>For more information on how we can serve you, feel free to get in touch with us.</h3>
          <CTASectionLink href="/contact">Contact Us</CTASectionLink>
        </CTASection>

      </ProductPageContainer >
    </>
  );
};

export default ProductData;
