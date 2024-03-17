import Category from "../../components/category/Category";
import HeroSection from "../../components/heroSection/HeroSection";
import Layout from "../../components/layout/Layout";
import ProductsCard from "../../components/productsCard/ProductsCard";
import Testimonial from "../../components/testimonial/Testimonial";

const Homepage = () => {
  return (
    <Layout>
      <HeroSection />
      <Category />
      <ProductsCard />
      <Testimonial />
    </Layout>
  );
};

export default Homepage;
