import { useState } from "react";
const RaveButton = (props) => {
  const [state, setState] = useState({
    text: props.text || "Make Payment",
    currency: props.currency || "USD",
    country: props.country || "GH",
  });

  const payWithRave = () => {
    window.getpaidSetup({
      customer_email: props.email,
      amount: props.amount,
      txref: props.reference,
      PBFPubKey: props.ravePubKey,
      onclose: () => props.close(),
      callback: (response) => props.callback(response),
      meta: props.metadata || [{}],
      currency: state.currency,
      country: state.country,
      customer_firstname: props.fName || "",
      customer_phone: props.customer_phone || "",
      customer_lastname: props.lName || "",
      custom_title: props.custom_title || "",
      custom_description: props.custom_description || "",
      custom_logo: props.custom_logo || "",
      subaccounts: props.subaccounts || [{}], //splits payments into subaccounts provided
      payment_method: props.payment_method || "both", //falls back to card and account if none is specified
      payment_plan: props.payment_plan || "", //the id of your payment plan
      redirect_url: props.redirect_url || "", //calls this url after successful payment
      hosted_payment: props.hosted_payment, //opens the modal in a new page
      campaign_id: props.campaign_id || "", //allows discounts
    });
  };
  return (
    <div className="wrapper">
      <button
        className={`${props.disabled ? "disabled" : "activated"}`}
        disabled={props.disabled}
        onClick={payWithRave}
      >
        {state.text}
      </button>

      <style jsx>{`
        .wrapper {
          display: flex;
          width: 100%;
        }

        button {
          height: 40px;
          margin-top: auto;
          border: none;
          border-radius: 4px;
          color: white;
          width: 100%;
          text-transform: uppercase;
        }

        .disabled {
          background-color: #eee;
          color: gray;
          cursor: not-allowed;
        }

        .activated {
          background-color: #3dcf8e;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default RaveButton;
