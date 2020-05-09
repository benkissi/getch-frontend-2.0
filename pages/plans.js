import DashboardLayout from "../components/dashboardLayout";
import Plan from "../components/plan";

const Plans = (props) => {
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
          margin-top: 50px;
        }
      `}</style>
    </div>
  );
};

Plans.Layout = DashboardLayout;

export default Plans;
