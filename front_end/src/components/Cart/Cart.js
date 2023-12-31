import React, { Fragment } from "react";
import "./Cart.css";
import CartItemsCard from "./CartItemsCard";
import { useSelector, useDispatch } from "react-redux";
import { addItemsToCart, removeItems } from "../../actions/cartAction";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { useNavigate } from "react-router-dom";


const Cart =  () =>  {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems } =  useSelector((state) =>  state.cart);

  console.log("cart", cartItems);

  const increaseQuantity = (id, quantity, stock) => {
    const newQty = quantity + 1;
    if (stock <= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const decreaseQuantity = (id, quantity) => {
    const newQty = quantity - 1;
    if (1 >= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const deleteCartItems = (id) => {
    dispatch(removeItems(id));
  };

  const checkoutHandler = () => {
    navigate("/login?redirect=shipping");
    // navigate('shipping')
  };

  return (
    <Fragment>
      {cartItems.length === 0 ? (
        <div className="emptyCart">
          <RemoveShoppingCartIcon />

          <Typography>No Product In Cart</Typography>
          <Link to="/products">View Products</Link>
        </div>
      ) : (
        <Fragment>
          <div className="cartPage">
            <div className="cartHeader">
              <p>Product</p>
              <p>Quantity</p>
              <p>Sub- Total</p>
            </div>

            {cartItems &&
              cartItems.map((item) => (
                <div className="cartContainer" key={item.product}>
                  <CartItemsCard
                    item={item}
                    deleteCartItems={deleteCartItems}
                  />
                  <div className="cartInput">
                    <button
                      onClick={() => {
                        decreaseQuantity(item.product, item.quantity);
                      }}
                    >
                      -
                    </button>
                    <input type="number" value={item.quantity} readOnly />
                    <button
                      onClick={() => {
                        increaseQuantity(
                          item.product,
                          item.quantity,
                          item.stock
                        );
                      }}
                    >
                      {" "}
                      +
                    </button>
                  </div>
                  <p className="cartSubtotal">
                    {`₹ ${item.price * item.quantity}`}{" "}
                  </p>
                </div>
              ))}

            <div className="cartGrossProfit">
              <div></div>
              <div className="cartGrossProfitBox">
                <p>Gross Total</p>
                <p>{`₹ ${cartItems.reduce(
                  (acc, item) => acc + item.quantity * item.price,
                  0
                )}   `}</p>
              </div>
              <div></div>
              <div className="checkoutBtn">
                <button onClick={checkoutHandler}>Check Out</button>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Cart;
