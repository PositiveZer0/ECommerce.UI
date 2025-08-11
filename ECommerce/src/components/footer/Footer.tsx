import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const Footer = () => (
  <Box component="footer" sx={{ py: 4, mt: 6, borderTop: 1, borderColor: 'divider' }}>
    <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Clothify
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mt: 1 }}>
        <Link href="#">About Us</Link>
        <Link href="#">Delivery</Link>
        <Link href="#">Contact</Link>
      </Box>
    </Container>
  </Box>
);

export default Footer;