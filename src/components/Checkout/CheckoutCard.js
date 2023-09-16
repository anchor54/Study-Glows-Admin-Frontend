import { TextField, FormControlLabel, Checkbox, Button } from "@mui/material";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";

import Loader from "../Tools/Loader";
import Divider from "../Tools/Divider";
import { Coupon } from "../../components/Coupon/Coupon";
import { useCheckout } from "./useCheckout";

import * as constant from "./constant";

import "./Checkout.scss";

export const CheckoutCard = () => {
  const {
    loading,
    cartData,
    totalData,
    couponCode,
    billingValues,
    disabledApply,
    handleOnChange,
    handlePlaceOrder,
    handleApplyCoupon,
    handleRemoveCoupon,
    handleOnChangeCoupon,
  } = useCheckout();

  return (
    <>
      <h1 className="headline_medium">Checkout</h1>
      {loading ? (
        <Loader />
      ) : (
        <form onSubmit={handlePlaceOrder} className="checkoutCard">
          <BillingCard billingValues={billingValues} handleOnChange={handleOnChange} />
          <div className="checkoutDetail">
            <CartProductDetail cartData={cartData} />
            <Coupon
              couponCode={couponCode}
              handleOnChangeCoupon={handleOnChangeCoupon}
              handleApplyCoupon={handleApplyCoupon}
              disabledApply={disabledApply}
              handleRemoveCoupon={handleRemoveCoupon}
            />
            <CartTotal totalData={totalData} />
            <img className="fluid-image" src="/images/order/razorpay.svg" alt="razorpay" />
            <FormControlLabel
              label="I agree to the Terms & Conditions."
              labelPlacement="end"
              control={<Checkbox name="checkbox" required />}
            />
            <Button type="submit" variant="contained">
              Place Order
            </Button>
          </div>
        </form>
      )}
    </>
  );
};

const BillingCard = ({ billingValues, handleOnChange }) => {
  return (
    <div className="billingCard">
      <div className="cardContent">
        <h2 className="headline_small">Billing Details</h2>
        <div className="formFields">
          {constant.inputFields.map((item) =>
            item.name === "phone" ? (
              <PhoneInput
                key={`checkout-${item.id}`}
                specialLabel={""}
                value={billingValues[item.name]}
                country={"in"}
                inputProps={{
                  name: "phone",
                  required: true,
                }}
                disabled={true}
                containerClass="phoneContainer"
                inputClass="phoneInput"
              />
            ) : (
              <TextField
                key={`checkout-${item.id}`}
                variant="outlined"
                name={item.name}
                label={item.label}
                type={item.type}
                placeholder={item.placeholder}
                sx={item.sx}
                required={item.required}
                value={billingValues[item.name]}
                InputProps={item.inputProps}
                onChange={handleOnChange}
                error={item.error}
                helperText={item.helperText}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

const CartProductDetail = ({ cartData }) => {
  return (
    <div className="productDetailsWrapper">
      {cartData &&
        cartData.map((item) =>
          item?.type === "course" ? (
            <div className="productDetails" key={`checkout-productdetail-${item.id}`}>
              <div>
                <img
                  className="fluid-image"
                  src={item?.course?.thumbnail}
                  alt={item?.course?.title}
                />
              </div>
              <h3 className="title_medium">{item?.course?.title}</h3>
              <div className="price">{item?.total_amount}</div>
            </div>
          ) : (
            <div className="productDetails" key={`checkout-productdetail-${item.id}`}>
              <div>
                <img
                  className="fluid-image"
                  src={item?.testseries?.thumbnail}
                  alt={item?.testseries?.title}
                />
              </div>
              <h3 className="title_medium">{item?.testseries?.title}</h3>
              <div className="price">{item?.total_amount}</div>
            </div>
          )
        )}
    </div>
  );
};

const CartTotal = ({ totalData }) => {
  return (
    <div className="cartTotal title_medium">
      <div className="wrapper">
        <div>Subtotal</div>
        <div>Rs. {totalData.subTotal}</div>
      </div>
      <div className="wrapper">
        <div>Tax</div>
        <div>Rs. {totalData.tax}</div>
      </div>
      <div className="wrapper">
        <div>Coupon Off</div>
        <div>Rs. {totalData.coupon}</div>
      </div>
      <Divider customStyle={{ backgroundColor: "#E9EEF2" }} />
      <div className="wrapper total">
        <div>Total</div>
        <div>Rs. {totalData.total}</div>
      </div>
    </div>
  );
};
