import { useNavigate } from "react-router-dom";
import privateAxios from "../axios/privateAxios";
import publicAxios from "../axios/publicAxios";

export const useRazorpay = (couponCode = "", totalData) => {
  const naviagte = useNavigate();

  /** load razorpay script */
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  /** process payment */
  const processPayment = () => {
    const request_body = { coupon_code: couponCode, total: totalData?.total };
    privateAxios
      .post("/checkout/place_order", request_body)
      .then((resp) => {
        const { message, amount, razorpay_order_id } = resp.data;
        message === "success" && requestRazorpay(amount, razorpay_order_id);
      })
      .catch((e) => {
        if (e?.response?.status === 400) {
          alert(e?.response?.data);
        }
        console.log(e);
      });
  };

  /** request to razorpay */
  const requestRazorpay = (amount, razorpay_order_id) => {
    const options = {
      key: process.env.REACT_RAZORPAY_KEY,
      amount: amount.toString(),
      name: "Study Glow",
      order_id: razorpay_order_id,
      handler: function (response) {
        const data = {
          razorpay_order_id_created: razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_order_id: response.razorpay_order_id,
          razorpay_signature: response.razorpay_signature,
        };

        publicAxios
          .post("/order/success-payment", data)
          .then((res) => {
            console.log(res);
            localStorage.setItem("payment", "success");
            // show success payment page
            naviagte("/payment/success");
          })
          .catch((e) => {
            if (e?.response?.status === 400) {
              alert(e?.response?.data);
            }
            console.log(e);
          });
      },
      prefill: {
        name: "Satya prakash",
        email: "example@example.com",
        contact: "9999999999",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const displayRazorpay = async () => {
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    processPayment();

    /*
    const result = await privateAxios.post("/order/process-payment");
    if (!result) {
      alert("Server error. Are you online?");
      return;
    }

    const { message, amount, razorpay_order_id } = result.data;
    if (message === "success") {
      const options = {
        key: process.env.REACT_RAZORPAY_KEY,
        amount: amount.toString(),
        name: "Study Glow",
        order_id: razorpay_order_id,
        handler: async function (response) {
          const data = {
            razorpay_order_id_created: razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_signature: response.razorpay_signature,
          };

          const result = await publicAxios.post("/order/success-payment", data);
          console.log(result);
        },
        prefill: {
          name: "Satya prakash",
          email: "example@example.com",
          contact: "9999999999",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } else {
      alert("Unable to make payment");
      return;
    }
    */
  };
  return displayRazorpay;
};
