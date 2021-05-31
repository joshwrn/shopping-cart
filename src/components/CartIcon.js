import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartSharp';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import Cart from './Cart';

const useStyles = makeStyles(() => ({
  badge: {
    transform: 'scale(0.8) translate(50%, -50%)',
  },
}));

const CartIcon = (props) => {
  const { click, cart, setCart } = props;
  const classes = useStyles();
  return (
    <div>
      <div onClick={click} id="cart-icon">
        <Badge
          badgeContent={cart.length}
          showZero
          color="error"
          classes={{ badge: classes.badge }}
        >
          <ShoppingCartIcon />
        </Badge>
      </div>
      <Cart cart={cart} setCart={setCart} click={click} />
    </div>
  );
};

export default CartIcon;
