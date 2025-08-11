import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import { useCart } from '../../utils/cardContext';
import { useState } from 'react';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const { items } = useCart();
  
  return (
    <>
      <AppBar position="static" color="inherit" elevation={1}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            <Button variant="text">For Men</Button>
            <Button variant="text">For Women</Button>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Badge badgeContent={items.length} color="secondary">
              <IconButton aria-label="cart" onClick={() => setOpen(true)}>
                <ShoppingCartIcon />
              </IconButton>
            </Badge>
            <IconButton sx={{ display: { md: 'none' } }}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 360, p: 2 }} role="presentation">
          <Typography variant="h6">Your cart</Typography>
          <List>
            {items.length === 0 && <Typography sx={{ p: 2 }}>Cart is empty</Typography>}
            {items.map((it, idx) => (
              <ListItem key={idx} divider>
                <ListItemText primary={it.title} secondary={`$${it.price}`} />
              </ListItem>
            ))}
          </List>
          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
            <Button variant="outlined" onClick={() => setOpen(false)}>
              Continue shopping
            </Button>
            <Button variant="contained">Checkout</Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default NavBar;