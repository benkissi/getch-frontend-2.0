function AdAccount(props) {
  const status = () => {
    switch (props.status) {
      case 1:
        return "ACTIVE";
      case 2:
        return "DISABLED";
      case 3:
        return "UNSETTLED";
      case 7:
        return "PENDING RISK REVIEW";
      case 8:
        return "PENDING SETTLEMENT";
      case 9:
        return "IN GRACE PERIOD";
      case 100:
        return "PENDING CLOSURE";
      case 101:
        return "CLOSED";
      case 201:
        return "ANY ACTIVE";
      case 202:
        return "ANY CLOSED";
      default:
        return "NONE";
    }
  };
  return (
    <div id="wrapper">
      <div className="name">{props.name}</div>
      <div className="id">
        {props.accountId ? props.accountId.replace("act_", "") : ""}
      </div>
      <div className={`_${props.status}`}>{status()}</div>
      <style jsx>{`
        #wrapper {
          display: flex;
          flex-direction: column;
          border: 1px solid #ccc;
          border-radius: 4px;
          padding: 5px;
          cursor: pointer;
        }

        .name {
            color: gray;
            font-weight: bold;
        }

        ._1 {
            color: green;
        }

        ._2, ._3,
        ._7, ._8,
        ._9, ._100,
        ._101, ._201,
        ._202 {
            color: red;
        }

        {/* .status{
            color:green;
        } */}
      `}</style>
    </div>
  );
}

export default AdAccount;
