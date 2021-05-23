import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartSharp';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import Cart from './Cart';

const useStyles = makeStyles((theme) => ({
  badge: {
    transform: 'scale(0.8) translate(50%, -50%)',
  },
}));

const CartIcon = (props) => {
  const { click } = props;
  const classes = useStyles();
  return (
    <div onClick={click}>
      <div className="cart-icon">
        <Badge
          badgeContent={0}
          showZero
          color="error"
          classes={{ badge: classes.badge }}
        >
          <ShoppingCartIcon />
        </Badge>
      </div>
      <Cart click={click} />
    </div>
  );
};

export default CartIcon;
