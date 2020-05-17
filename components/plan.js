// import { useRavePayment } from "react-ravepayment";
import RaveButton from "./raveButton";
const Plan = (props) => {
  const config = {
    txref: "rave-123456",
    customer_email: props.userEmail,
    amount: 59,
    PBFPubKey: process.env.RAVE_PUB_KEY,
    currency: "USD",
    country: "GH",
    production: false,
  };

  const onPaymentModalClose = () => {
    console.log(true);
  };

  const getReference = () => {
    let text = "";
    let possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";

    for (let i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  };

  return (
    <div className="wrapper">
      <div className="header">
        {props.currentPlan === "PL002" ? <p id="current">Current Plan</p> : ""}
        <div className="plan-image">
          <img src={props.image} />
        </div>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
      <div className="price">
        <span>$</span>
        59
      </div>
      <div className="features">
        {props.features.map((feature, index) => (
          <div className="feature" key={index}>
            {" "}
            <div className="feature-image">
              <img src={feature.image} />
            </div>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>

      <RaveButton
        email={props.userEmail}
        currency="USD"
        country="GH"
        reference={getReference()}
        amount={59}
        ravePubKey={process.env.RAVE_PUB_KEY}
        close={onPaymentModalClose}
        fName={props.fName}
        lName={props.lName}
        callback={(response) => props.verifyPayment("Life-time", response)}
        disabled={props.currentPlan === "PL002"}
      />
      <style jsx>{`
        .wrapper {
          display: flex;
          flex-direction: column;
          border: 1px solid #eee;
          padding: 15px;
          width: 50%;
          max-width: 407px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
            0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }

        .header {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .plan-image {
          display: flex;
          justify-content: center;
          width: 100%;
          margin-bottom: 10px;
        }

        .features {
          margin-top: 20px;
          margin-bottom: 50px;
        }

        .feature {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .feature-image {
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 50px;
          max-width: 50px;
          margin-right: 10px;
        }

        .feature-image img {
          width: 100%;
        }

        .plan-image img {
          width: 10%;
        }

        #current {
          background: #3dcf8e;
          padding: 5px;
          color: white;
          font-weight: bold;
        }

        .price {
          display: flex;
          justify-content: center;
          align-items: center;
          color: #4e53c8;
          font-weight: bold;
          font-size: 50px;
        }
        .price span {
          font-size: 30px;
        }
      `}</style>
    </div>
  );
};

export default Plan;
