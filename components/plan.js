const Plan = (props) => {
  return (
    <div className="wrapper">
      <div className="header">
        <div className="plan-image">
          <img src={props.image} />
        </div>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
      <div className="features">
        {props.features.map((feature) => (
          <div className="feature">
            {" "}
            <div className="feature-image">
              <img src={feature.image} />
            </div>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
      <button>GET ACCESS</button>
      <style jsx>{`
        .wrapper {
          display: flex;
          flex-direction: column;
          border: 1px solid #eee;
          padding: 15px;
          width: 40%;
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
          margin-top: 50px;
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

        button {
          cursor: pointer;
          height: 40px;
          margin-top: auto;
          background-color: #3dcf8e;
          border: none;
          border-radius: 4px;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default Plan;
