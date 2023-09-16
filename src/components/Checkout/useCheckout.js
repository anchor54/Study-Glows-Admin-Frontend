/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import privateAxios from "../../axios/privateAxios";
import { useRazorpay } from "../../helper/useRazorpay";
import { toastAtom } from "../../state/atoms/toastAtom";
import { userAtom } from "../../state/atoms/userAtom";
import { useCart } from "../Cart/useCart";

export const useCheckout = () => {
  const { cartData, totalData, loading, emptyCart, setTotalData } = useCart();

  const navigate = useNavigate();
  const [couponCode, setCouponCode] = useState("");
  const [disabledApply, setDisableApply] = useState(false);
  const [billingValues, setBillingValues] = useRecoilState(userAtom);
  const displayRazorpay = useRazorpay(couponCode, totalData);
  const [, setShowToast] = useRecoilState(toastAtom);

  // load userData
  useEffect(() => {
    const loadUserData = () => {
      privateAxios
        .get("/account/profile")
        .then((res) => setBillingValues(res.data))
        .catch((e) => console.log(e));
    };

    billingValues.id === "" && loadUserData();
  }, []);

  // if cart is empty
  useEffect(() => {
    if (loading && emptyCart) {
      navigate("/cart");
    }
  }, [loading, emptyCart]);

  const handleOnChange = (e) => {
    setBillingValues((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    displayRazorpay();
  };

  const handleOnChangeCoupon = (e) => {
    setCouponCode(e.target.value);
  };

  const handleApplyCoupon = () => {
    const validateCouponCode = () => {
      const successToast = { status: true, type: "success", successMessage: "Coupon code applied" };
      const errorToast = { status: true, type: "warning", errorMessage: "Invalid coupon code" };
      const request_body = { coupon_code: couponCode };

      privateAxios
        .post("/coupon/validate-coupon", request_body)
        .then((res) => {
          const coupon_discount = res?.data?.coupon_discount;
          if (coupon_discount > 0) {
            setDisableApply(true);
            setShowToast(successToast);
            updateCartTotal("add_coupon_discount", coupon_discount);
          } else {
            setDisableApply(false);
            setShowToast(errorToast);
            updateCartTotal("remove_coupon_discount");
          }
        })
        .catch((e) => {
          setDisableApply(false);
          setShowToast(errorToast);
          updateCartTotal("remove_coupon_discount");
          console.log(e);
        });
    };
    couponCode !== "" && validateCouponCode();
  };

  const handleRemoveCoupon = () => {
    const successToast = { status: true, type: "success", successMessage: "Coupon code removed" };
    setCouponCode("");
    setDisableApply(false);
    setShowToast(successToast);
    updateCartTotal("remove_coupon_discount");
  };

  const updateCartTotal = (action = "add_coupon_discount", coupon_discount) => {
    if (action === "add_coupon_discount" && coupon_discount > 0) {
      const updated_total = totalData?.total - coupon_discount;
      if (updated_total > 0) {
        setTotalData((pre) => ({ ...pre, coupon: coupon_discount, total: updated_total }));
        return true;
      }
    }
    if (action === "remove_coupon_discount" && totalData?.coupon > 0) {
      const updated_total = totalData?.total + totalData?.coupon;
      if (updated_total > 0) {
        setTotalData((pre) => ({ ...pre, coupon: 0, total: updated_total }));
        return true;
      }
    }
    return false;
  };

  return {
    loading: loading,
    cartData: cartData,
    totalData: totalData,
    couponCode: couponCode,
    billingValues: billingValues,
    disabledApply: disabledApply,
    handleOnChange: handleOnChange,
    handlePlaceOrder: handlePlaceOrder,
    handleApplyCoupon: handleApplyCoupon,
    handleRemoveCoupon: handleRemoveCoupon,
    handleOnChangeCoupon: handleOnChangeCoupon,
  };
};
