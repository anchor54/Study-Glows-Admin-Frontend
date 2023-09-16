import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";

import { useCart } from "./useCart";
import Divider from "../Tools/Divider";
import Loader from "../Tools/Loader";
import privateAxios from "../../axios/privateAxios";

import "./Cart.scss";

export const CartCard = () => {
  const navigate = useNavigate();
  const { cartData, totalData, loading, emptyCart, handleRemoveProductFromCart } = useCart();

  // handle checkout
  const handleProccedToCheckout = () => {
    const placeorder = (total) => {
      privateAxios
        .post(`/checkout`, { total: total })
        .then((res) => {
          navigate("/checkout");
          // console.log(res);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    totalData?.total && placeorder(totalData?.total);
  };

  return emptyCart ? (
    <div style={{ textAlign: "center", margin: "5rem" }}>
      Nothing in the cart <br /> <br />
      <NavLink to={`/`} className="buttonLink">
        <Button variant="contained">Homepage</Button>
      </NavLink>
    </div>
  ) : (
    <>
      <div className="cartCard">
        <div className="productDetail">
          <div className="productHeader">
            <div className="title_medium">PRODUCT</div>
            <div className="title_medium">PRICE</div>
          </div>

          {loading && <Loader />}

          {cartData &&
            cartData.map((item) => (
              <ProductCard
                key={`productCard-${item.id}`}
                product={item}
                handleRemoveProductFromCart={handleRemoveProductFromCart}
              />
            ))}
        </div>
        <div className="cartTotal">
          <h1 className="headline_medium">Cart Total</h1>
          <div className="total title_medium">
            <div className="wrapper">
              <div>Subtotal</div>
              <div>Rs. {totalData?.subTotal}</div>
            </div>
            <div className="wrapper">
              <div>Tax</div>
              <div>Rs. {totalData?.tax}</div>
            </div>
            <Divider color="primary" />
            <div className="wrapper">
              <div>Total</div>
              <div>Rs. {totalData?.total}</div>
            </div>
          </div>

          <Button variant="contained" onClick={handleProccedToCheckout}>
            Proceed to checkout
          </Button>
        </div>
      </div>
    </>
  );
};

const ProductCard = ({ product, handleRemoveProductFromCart }) => {
  let item = null;
  const course_type = product?.type;
  if (course_type === "course") {
    item = product?.course;
  } else if (course_type === "testseries") {
    item = product?.testseries;
  }

  return (
    <>
      <div className="productCard">
        <div>
          <img className="fluid-image" src={item?.thumbnail} alt={item?.title} />
        </div>
        <div>
          <h2 className="title_large">{item.title}</h2>
          <div className="addons body_small">
            {item?.validity && (
              <div className="wrapper">
                <div>
                  <AccessTimeIcon fontSize="small" />
                </div>
                <div>{item?.validity}</div>
              </div>
            )}
            {item?.testSeries && (
              <div className="wrapper">
                <div>
                  <LibraryAddIcon />
                </div>
                <div>Include Mock Tests</div>
              </div>
            )}
          </div>
        </div>
        <div className="price title_large">{product?.total_amount}</div>
        <div className="closeIcon">
          <IconButton
            size="small"
            color="secondary"
            onClick={() => handleRemoveProductFromCart(product)}
          >
            <CloseIcon />
          </IconButton>
        </div>
      </div>
      <Divider customStyle={{ backgroundColor: "#D9D9D9" }} />
    </>
  );
};
