import Category from "../../components/category/Category";
import HeroSection from "../../components/heroSection/HeroSection";
import Layout from "../../components/layout/Layout";
import ProductsCard from "../../components/productsCard/ProductsCard";

const Homepage = () => {
  return (
    <Layout>
      <HeroSection />
      <Category />
      <ProductsCard />
    </Layout>
  );
};

export default Homepage;
