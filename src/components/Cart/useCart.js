import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import privateAxios from "../../axios/privateAxios";

export const useCart = () => {
  const navigate = useNavigate();
  const [emptyCart, setEmptyCart] = useState(false);
  const [cartData, setCartData] = useState([]);
  const [totalData, setTotalData] = useState({ subTotal: 0, tax: 0, coupon: 0, total: 0 });
  const [loading, setLoading] = useState(false);

  /* update subtotal and total */
  useEffect(() => {
    let subTotal, tax, total;
    subTotal = tax = total = 0;

    cartData &&
      cartData.forEach((element) => {
        subTotal += parseFloat(element?.amount);
        tax += parseFloat(element?.tax_amount);
        total += parseFloat(element?.total_amount);
      });

    setTotalData((pre) => ({ ...pre, subTotal: subTotal, tax: tax, total: total }));
  }, [cartData]);

  /* load cart data */
  useEffect(() => {
    const loadCart = () => {
      setLoading(true);
      privateAxios
        .get("/cart")
        .then((res) => {
          setCartData(res.data?.product_quantity);
          setLoading(false);
          // console.log(res.data);
        })
        .catch((e) => {
          if (e?.response?.status === 404) {
            setEmptyCart(true);
          }
          setLoading(false);
          console.log(e);
        });
    };
    loadCart();
  }, []);

  /* remove product from cart */
  const handleRemoveProductFromCart = (product) => {
    const removeFromCart = (type, id) => {
      let request_body = {};
      type === "course"
        ? (request_body = {
            type: "course",
            course_id: id,
          })
        : (request_body = {
            type: "testseries",
            testseries_id: id,
          });

      privateAxios
        .delete("/cart", { data: request_body })
        .then((res) => {
          /** update the cart ui */
          setCartData((pre) => {
            // eslint-disable-next-line no-unused-vars
            let [product, ...remainingProduct] = pre;

            /* if cart is empty navigate to homepage */
            remainingProduct.length === 0 && navigate("/");
            return remainingProduct;
          });
          // console.log(res.data);
        })
        .catch((e) => console.log(e));
    };

    if (product) {
      /* remove from cart(backend) */
      if (product?.type === "course")
        product?.course && removeFromCart(product?.type, product?.course?.id);
      else if (product?.type === "testseries")
        product?.testseries && removeFromCart(product?.type, product?.testseries?.id);
    }
  };
  return {
    cartData: cartData,
    totalData: totalData,
    loading: loading,
    emptyCart: emptyCart,
    setTotalData: setTotalData,
    handleRemoveProductFromCart: handleRemoveProductFromCart,
  };
};
