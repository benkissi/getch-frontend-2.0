import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Modal, Button, Select, Row, Col } from "antd";

import { chartData } from "../utils/table";

import Table from "../components/table";
import AdAccount from "../components/adAccount";
import { performanceColumns } from "../utils/table";
import { getAdAccounts, paginateAdAccounts, getCampaigns } from "../api/api";

function Performance(props) {
  const [state, setState] = useState({
    modalVisible: false,
    selectedRowKeys: null,
    paging: {
      next: "",
      previous: ""
    },
    selectedAdAccount: {},
    fetchingCampaigns: false
  });

  const { fbId, user } = props;

  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("on browser");
      const { Column } = require("@antv/g2plot");

      const chart = new Column(document.getElementById("chart"), {
        data: chartData,
        xField: "name",
        yField: "value",
        padding: "auto",
        title: {
          visible: true,
          text: "Interest stats"
        },
        forceFit: true
      });
      console.log("el", document.getElementById("chart"));
      chart.render();
    }
  }, []);

  useEffect(() => {
    fetchAdAccounts();
  }, [state.modalVisible]);

  useEffect(() => {
    if (state.selectedAdAccount.id) {
      fetchCampaigns();
    }
  }, [state.selectedAdAccount]);

  useEffect(() => {
    
  }, [state.campaigns]);

  const setModalVisible = modalVisible => {
    setState({
      ...state,
      modalVisible
    });
  };

  const fetchAdAccounts = async () => {
    if (state.modalVisible) {
      const adAccounts = await getAdAccounts(fbId, user.xToken);
      setState({
        ...state,
        adAccounts: adAccounts,
        paging: {
          next: adAccounts.paging.next && adAccounts.paging.next,
          previous: adAccounts.paging.previous && adAccounts.paging.previous
        }
      });
    }
  };

  const fetchCampaigns = async () => {
    setState({
      ...state,
      fetchingCampaigns: true
    })
    const accountId = state.selectedAdAccount.id;
    const res = await getCampaigns(accountId, user.xToken);
    console.log("campaigns", res);
    setState({
      ...state,
      campaigns: res
    });
  };

  const handlePagination = async page => {
    const adAccounts = await paginateAdAccounts(page);
    console.log("paginate", adAccounts);
    setState({
      ...state,
      adAccounts: adAccounts,
      paging: {
        next: adAccounts.paging.next && adAccounts.paging.next,
        previous: adAccounts.paging.previous && adAccounts.paging.previous
      }
    });
  };

  const onSelectionChange = (selectedRowKeys, selectedRows) => {
    console.log("rows", selectedRows);
    const selectedInterest = selectedRows.map(interest => {
      return interest.name;
    });
    setState({
      ...state,
      selectedRowKeys,
      selectedInterest,
      selectedRows
    });
  };

  const handleAccountSelect = (id, name) => {
    setState({
      ...state,
      selectedAdAccount: {
        id,
        name
      },
      modalVisible: false,
    });
  };

  const { Option } = Select;
  const { selectedRowKeys } = state;
  return (
    <div id="performance">
      <Row gutter={16} style={{ width: "100%" }}>
        <Col span={4}>
          <div className="selection">
            <div className="button item">
              <Button onClick={() => setModalVisible(true)} block>
                {state.selectedAdAccount.name
                  ? state.selectedAdAccount.name
                  : "Select Ad Account"}
              </Button>
            </div>
            <div className="select item">
              <Select
                showSearch
                style={{ width: "100%" }}
                loading={state.fetchingCampaigns}
                placeholder="Select a campaign"
                optionFilterProp="children"
                // onChange={onChange}
                // onFocus={onFocus}
                // onBlur={onBlur}
                // onSearch={onSearch}
                filterOption={(input, option) =>
                  option.props.children
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                }
              >
                {
                  state.campaigns ?
                  state.campaigns.data.map((item, index) => {
                  return <Option value={item.id} key={index}>{item.name}</Option>
                  }) : ''
                }
              </Select>
            </div>
            <div className="select item">
              <Select style={{ width: "100%" }} placeholder="Select adset">
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                  Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </div>
            <div className="select item">
              <Select style={{ width: "100%" }} placeholder="Select ad">
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                  Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </div>
          </div>
        </Col>
        <Col span={20}>
          <div className="stats">
            <div id="chart"></div>
            <div>
              <Table
                columns={performanceColumns}
                onSelection={onSelectionChange}
                selectedRowKeys={selectedRowKeys}
                className="table"
              />
            </div>
          </div>
        </Col>
      </Row>
      <Modal
        title="Select an Ad account"
        centered
        visible={state.modalVisible}
        onOk={() => setModalVisible(false)}
        onCancel={() => setModalVisible(false)}
        okText="Next"
        cancelText="Previous"
        okButtonProps={{
          disabled: !!!state.paging.next,
          onClick: () => handlePagination(state.paging.next)
        }}
        cancelButtonProps={{
          disabled: !!!state.paging.previous,
          onClick: () => handlePagination(state.paging.previous)
        }}
        width={1300}
      >
        <div className="adAccounts">
          <div className="inner">
            {state.adAccounts
              ? state.adAccounts.data.map((item, index) => (
                  <div className="account" key={index}>
                    <AdAccount
                      name={item.name}
                      accountId={item.id}
                      status={item.account_status}
                      onSelect={handleAccountSelect}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </Modal>
      <style jsx>
        {`
          #performance {
            display: flex;
            position: relative;
            margin-top: 70px;
            width: 100%;
          }

          .selection {
            display: flex;
            flex-direction: column;
            border: 1px solid #ccc;
            border-radius: 4px;
            height: auto;
            padding: 10px;
          }

          .item {
            margin-bottom: 30px;
            width: 100%;
          }
          .stats {
            display: flex;
            flex-direction: column;
          }

          .adAccounts {
            display: flex;
            justify-content: center;
          }

          .adAccounts .inner {
            display: flex;
            flex-wrap: wrap;
            width: 90%;
          }

          .account {
            min-width: 20%;
            margin: 10px;
          }
        `}
      </style>
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.user.currentUser,
  fbId: state.user.fbToken.fbId
});

export default connect(mapStateToProps)(Performance);
