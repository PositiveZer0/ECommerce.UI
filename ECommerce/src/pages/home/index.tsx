import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import products from '../../data/products';
import NavBar from '../../components/navbar/Navbar';
import ProductGrid from './components/ProductGrid';
import Logo from './components/Logo';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <>
      <NavBar />
      <Container maxWidth="lg">
        <Box sx={{ my: 4, display: 'flex', justifyContent: 'center' }}>
          <Logo />
        </Box>
        
        <ProductGrid products={products} />
      </Container>
      <Footer />
    </>
  );
};

export default Home;