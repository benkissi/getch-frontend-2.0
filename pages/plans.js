import { useEffect } from "react";
import DashboardLayout from "../components/dashboardLayout";
import Plan from "../components/plan";
import { connect } from "react-redux";

import { verifyPayment } from "../redux/user/user-actions";

const Plans = (props) => {
  useEffect(() => {
    if (!window.getpaidSetup) {
      new Promise((resolve) => {
        loadScript(() => {
          resolve();
        });
      });
    }
  }, []);

  const features = [
    {
      image: "/images/search.svg",
      description:
        "Uncover 1000's of targetable Facebook™ interests your competition can't find, so you can avoid the bidding war and skyrocket your ROAS ",
    },
    {
      image: "/images/download.svg",
      description:
        "Easily cherrypick profitable Facebook™ interests by simply copy - pasting them in your detailed targeting or downloading them as a CSV file",
    },
    {
      image: "/images/time.svg",
      description:
        "Save hours of manual interest research with our auto-generated interest research links",
    },
  ];

  const loadScript = (callback) => {
    const script = document.createElement("script");
    script.src = !props.isProduction
      ? "https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/flwpbf-inline.js"
      : "https://api.ravepay.co/flwv3-pug/getpaidx/api/flwpbf-inline.js";
    document.getElementsByTagName("head")[0].appendChild(script);
    if (script.readyState) {
      // IE
      script.onreadystatechange = () => {
        if (
          script.readyState === "loaded" ||
          script.readyState === "complete"
        ) {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {
      // Others
      script.onload = () => {
        callback();
      };
    }
  };

  const paymentCallback = async (plan, response) => {
    if (
      response.tx.chargeResponseCode == "00" ||
      response.tx.chargeResponseCode == "0"
    ) {
      await props.verify(props.user.xToken, plan, response.tx.txRef);

      // if (res.data.plan.name !== "trial") {
      //   updateState(res.data.plan.name, res.data.plan.nextPayment);
      //   console.log("paid");
      // } else if (res.status == 400) {
      //   toast.error(`Something went wrong. Contact support if this persits`, {
      //     position: "top-right",
      //     autoClose: 5000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //   });
      // }
    }
  };

  return (
    <div className="wrapper">
      <div className="title">
        <h2>Pricing</h2>
        <p>Simple pricing, no hidden fees</p>
      </div>
      <div className="packages">
        <Plan
          image="/images/fbKey.svg"
          title="Life-time Access"
          description="Get access to hidden Facebook interest"
          features={features}
          userEmail={props.user ? props.user.email : ""}
          fName={props.user ? props.user.name.split[0] : ""}
          lName={props.user ? props.user.name.split[1] : ""}
          verifyPayment={paymentCallback}
          currentPlan={props.user ? props.user.plan : ""}
        />
      </div>
      <style jsx>{`
        .wrapper {
          display: flex;
          margin-top: 100px;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        .title {
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
        }

        .packages {
          display: flex;
          justify-content: center;
          width: 100%;
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
};

Plans.Layout = DashboardLayout;

Plans.defaultProps = {
  isProduction: false,
};

const mapStateToProps = (state) => ({
  user: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  verify: (token, plan, ref) => dispatch(verifyPayment({ token, plan, ref })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Plans);
