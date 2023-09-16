import Button from "@mui/material/Button";

import "./Coupon.scss";

export const Coupon = ({
  couponCode,
  handleOnChangeCoupon,
  handleApplyCoupon,
  disabledApply,
  handleRemoveCoupon,
}) => {
  return (
    <div className="coupon">
      <div>
        <img className="fluid-image" src="/images/order/coupon.svg" alt="coupon" />
      </div>
      <div>
        <input
          type="text"
          placeholder="Have a coupon Code?"
          maxLength={15}
          value={couponCode}
          onChange={handleOnChangeCoupon}
          className="body_large"
          disabled={disabledApply}
        />
      </div>
      <div>
        <Button
          variant="contained"
          disabled={couponCode.length > 0 ? false : true}
          onClick={disabledApply ? handleRemoveCoupon : handleApplyCoupon}
        >
          {disabledApply ? "Remove" : "Apply"}
        </Button>
      </div>
      <div className="helpText title_small">Check your available coupons.</div>
    </div>
  );
};
