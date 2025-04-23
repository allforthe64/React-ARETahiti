import React, { useState, useContext } from 'react';
import ShoppingCartContext from '../context/ShoppingCartProvider';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Badge,
  Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Nav() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const {shoppingCart} = useContext(ShoppingCartContext)

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navItems = [
    { label: 'Home', to: '/' },
    /* { label: 'Shop', to: '/shop' }, */
    { label: 'About', to: '/about' },
    { label: 'The canoes', to: '/canoes' },
    { label: 'Paddles', to: '/paddles' },
    { label: 'Ordering a canoe', to: '/order' },
    { label: 'Cart', to: '/shoppingCart' },
  ];

  const cartQuantity = shoppingCart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#000' }}>
        <Toolbar sx={{ justifyContent: 'space-between', backgroundColor: '#212121' }}>
          <Typography variant="h6" component={Link} to="/" sx={{ color: '#fff', textDecoration: 'none' }}>
            <p className='heading'>Aito<span className='text-[#FF3C00]'>Gear</span></p>
          </Typography>

          <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250, height: '100%', backgroundColor: '#212121' }} role="presentation">
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon sx={{color: 'white'}}/>
            </IconButton>
          </Box>
          <List>
            {navItems.map((item, index) => (
              <ListItem key={item.to} disablePadding>
                <ListItemButton component={Link} to={item.to} onClick={toggleDrawer(false)}  sx={{
                  '&:hover': {
                    backgroundColor: '#FF3C00', // background color on hover
                    color: '#fff',           // text/icon color on hover
                  },
                }}>
                  <p className='heading text-white'>{item.label}</p>
                  {item.label === 'Cart' && cartQuantity > 0 && (
                    <Badge badgeContent={cartQuantity} color="error" sx={{ ml: 2 }}>
                      <ShoppingCartIcon sx={{color: 'white'}}/>
                    </Badge>
                  )}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}