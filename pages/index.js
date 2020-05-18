import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Router from "next/router";
import { connect } from "react-redux";
import { Button, Input, Slider } from "antd";
import { ExportToCsv } from "export-to-csv";
import { toast } from "react-toastify";
import Loader from "react-loader-spinner";

import DashboardLayout from "../components/dashboardLayout";
import InterestTable from "../components/table";

import { tableColumns } from "../utils/table";

import decodeToken from "../utils/auth";
import { addingCurrentUser } from "../redux/user/user-actions";
import { searchStart } from "../redux/search/search-actions";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Index = (props) => {
  const [state, setState] = useState({
    selectedInterest: [],
    min: null,
    max: null,
  });
  const {
    token,
    user,
    addUser,
    fbToken,
    interestData,
    searchInterest,
    keyword,
    interestCount,
    searching,
    searchCount,
  } = props;
  const { Search } = Input;
  const router = useRouter();

  useEffect(() => {
    if (token) {
      const decoded = decodeToken(token);
      const { _id, name, email, domain } = decoded;
      const userData = {
        id: _id,
        name,
        email,
        domain,
        xToken: token,
      };
      addUser(userData);
    } else if (user) {
      console.log(user);
    } else {
      router.push("/signup");
    }
  }, []);

  useEffect(() => {
    if (interestData && interestCount) {
      const max = Math.max.apply(
        Math,
        interestData.map((item) => item["audience_size"])
      );
      const min = Math.min.apply(
        Math,
        interestData.map((item) => item["audience_size"])
      );

      setState({
        ...state,
        max: max,
        min: min,
        interests: interestData,
        interestNumber: interestCount,
      });
    }
  }, [interestData, interestCount]);

  const getInterest = async (value) => {
    if (searchCount >= 3 && user.plan === "PL001") {
      Router.push("/plans");
      return;
    }
    await searchInterest(fbToken.token, value, 500, user.xToken);
  };

  const onSelectionChange = (selectedRowKeys, selectedRows) => {
    console.log("rows", selectedRows);
    const selectedInterest = selectedRows.map((interest) => {
      return interest.name;
    });
    setState({
      ...state,
      selectedRowKeys,
      selectedInterest,
      selectedRows,
    });
  };

  const onCopy = () => {
    const { selectedInterest } = state;
    console.log("copy", selectedInterest);
    if (selectedInterest.length) {
      navigator.clipboard.writeText(selectedInterest).then(() => {
        console.log("you copied", selectedInterest.length);

        toast.success(`You copied ${selectedInterest.length} items`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      });
    } else {
      toast.error(`You have not made any selection`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const options = {
    fieldSeparator: ",",
    quoteStrings: '"',
    decimalSeparator: ".",
    showLabels: true,
    showTitle: true,
    title: "Interest List",
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: true,
  };
  const csvExporter = new ExportToCsv(options);

  const handleExport = async () => {
    // const {selectedRows} = state
    if (interestData) {
      let exportArray = [];
      interestData.forEach((item) => {
        let readyExport = {};
        readyExport.id = item.id;
        readyExport.name = item.name;
        readyExport.audience = item.audience_size;
        readyExport.description = item.description;
        readyExport.topic = item.topic;
        readyExport.path = JSON.stringify(item.path);
        readyExport.score = item.relevance;
        exportArray.push(readyExport);
      });

      await csvExporter.generateCsv(exportArray);
      toast.success(`You downloaded ${interestData.length} items`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      toast.error(`You have not made any selection`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const onFilterChange = (value) => {
    const filtered = interestData.filter(
      (item) =>
        item["audience_size"] >= value[0] && item["audience_size"] <= value[1]
    );
    setState({
      ...state,
      interests: filtered,
    });
  };

  const { interests, selectedRowKeys, interestNumber, max, min } = state;
  return (
    <div id="wrapper">
      <div id="main-content">
        <div className="top">
          <div className="inner">
            <Search
              placeholder="Find Facebook interest for a keyword"
              enterButton="Getch"
              size="large"
              onSearch={(value) => getInterest(value)}
            />
            <div className="controls">
              <div>
                {interestNumber ? (
                  <p>
                    <b>{interestNumber}</b> interest found for "{keyword}"
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className="filter">
                <p>Filter audience</p>
                <Slider
                  max={max}
                  min={min}
                  range
                  defaultValue={[min, max]}
                  onAfterChange={onFilterChange}
                />
              </div>
              <div className="actions">
                <div className="button">
                  <Button onClick={onCopy}>Copy</Button>
                </div>
                <div className="button">
                  <Button onClick={handleExport}>Download as CSV</Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="table">
          {searching ? (
            <div className="loader">
              <Loader type="Bars" color="#4e54c8" height={100} width={100} />
            </div>
          ) : (
            <InterestTable
              onSelection={onSelectionChange}
              selectedRowKeys={selectedRowKeys}
              className="table"
              columns={tableColumns}
              dataSource={interests}
            />
          )}
        </div>
      </div>

      <style jsx>{`
        #wrapper {
          margin: 10px;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        #main-content {
          margin-top: 30px;
          flex-grow: 1;
        }
        #table {
          margin-top: 90px;
          flex-grow: 1;
        }

        .controls {
          display: flex;
          margin-top: 10px;
          justify-content: space-between;
        }

        .actions {
          display: flex;
        }

        .actions > * {
          margin-left: 5px;
        }
        .loader {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 500px;
        }
        .divider {
          height: 35px;
          width: 0;
          border-left: 1px solid #ccc;
          margin: 0 0 0 5px;
        }

        .filter {
          width: 30%;
        }

        .top {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          height: 130px;
          margin-bottom: 20px;
          width: 100%;
          background-color: white;
        }

        .inner {
          position: fixed;
          top: 70px;
          width: 81%;
          background-color: white;
          z-index: 100;
          height: 200px;
          display: flex;
          justify-content: center;
          flex-direction: column;
        }

        .header {
          margin-bottom: 20px;
        }

        :global(.links) {
          margin-right: 15px;
        }

        :global(.links img) {
          width: 20px;
        }

        @media screen and (max-width: 480px) {
          .wrapper {
            width: 100%;
          }

          .top {
            margin-top: 50px;
          }

          .inner {
            right: 0;
            width: 100%;
            padding: 20px;
          }

          .inner .controls {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

Index.getInitialProps = async function (context) {
  const token = context.query.at;
  return {
    token,
  };
};

const mapStateToProps = (state) => ({
  user: state.user.currentUser,
  searching: state.search.loading,
  searchCount: state.search.searchCount,
  fbToken: state.user.fbToken,
  interestData: state.search.interests,
  interestCount: state.search.interestCount,
  keyword: state.search.keyword,
});

const mapDispatchToProps = (dispatch) => ({
  addUser: (item) => dispatch(addingCurrentUser(item)),
  searchInterest: (token, value, limit, xToken) =>
    dispatch(searchStart({ token, value, limit, xToken })),
});

Index.Layout = DashboardLayout;

export default connect(mapStateToProps, mapDispatchToProps)(Index);
