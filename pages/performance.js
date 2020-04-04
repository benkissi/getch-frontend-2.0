import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Modal, Button, Select, Row, Col } from "antd";

import { chartData } from "../utils/table";

import Table from "../components/table";
import AdAccount from "../components/adAccount";
import { performanceColumns } from "../utils/table";
import { truncate } from "../utils/common"
import {
  getAdAccounts,
  fbPaginate,
  getCampaigns,
  getAdsets,
  getAds,
  getInterestStats
} from "../api/api";

function Performance(props) {
  const [state, setState] = useState({
    accountModalVisible: false,
    campaignModalVisible: false,
    selectedRowKeys: null,
    pagingAccounts: {
      next: "",
      previous: ""
    },
    pagingCampaigns: {
      next: "",
      previous: ""
    },
    selectedAdAccount: {},
    selectedCampaign: {},
    selectedAdset: {},
    selectedAd: {},
    fetchingCampaigns: false,
    fetchingAdsets: false
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
    if (state.accountModalVisible) {
      fetchAdAccounts();
    }
  }, [state.accountModalVisible]);

  useEffect(() => {
    if (state.selectedAdAccount.id) {
      setModalVisible(false, "accountModalVisible");
      fetchCampaigns();
    }
  }, [state.selectedAdAccount]);

  useEffect(() => {
    if (state.selectedCampaign.id) {
      fetchAdsets();
    }
  }, [state.selectedCampaign]);

  useEffect(() => {
    if (state.selectedAdset.id) {
      fetchAds();
    }
  }, [state.selectedAdset]);

  useEffect(() => {
    if (state.selectedAd.id) {
      fetchStats();
    }
  }, [state.selectedAd]);

  const setModalVisible = (status, modalName) => {
    setState(prevState => ({
      ...prevState,
      [modalName]: status
    }));
  };

  const setCampaignsModal = modalVisible => {
    setState(prevState => ({
      ...prevState,
      campaignModalVisible: modalVisible
    }));
  };

  const fetchAdAccounts = async () => {
    if (state.accountModalVisible) {
      console.log("fetch ad accounts");
      const adAccounts = await getAdAccounts(fbId, user.xToken);
      console.log("AD accoutns", adAccounts);
      setState(prevState => ({
        ...prevState,
        adAccounts: adAccounts,
        pagingAccounts: {
          next: adAccounts.paging.next && adAccounts.paging.next,
          previous: adAccounts.paging.previous && adAccounts.paging.previous
        },
        selectedAdAccount: {},
        selectedCampaign: {},
        selectedAdset: {}
      }));
    }
  };

  const fetchCampaigns = async () => {
    setState(prevState => ({
      ...prevState,
      fetchingCampaigns: true,
      selectedCampaign: {}
    }));
    const accountId = state.selectedAdAccount.id;
    const res = await getCampaigns(accountId, user.xToken);
    setState(prevState => ({
      ...prevState,
      campaigns: res,
      fetchingCampaigns: false,
      pagingCampaigns: {
        next: res.paging && res.paging.next,
        previous: res.paging && res.paging.previous
      }
    }));
  };

  const fetchAdsets = async () => {
    setState(prevState => ({
      ...prevState,
      fetchingAdsets: true,
      selectedAdset: {}
    }));
    const campaignId = state.selectedCampaign.id;
    const res = await getAdsets(campaignId, user.xToken);
    console.log("sets", res.data);
    setState(prevState => ({
      ...prevState,
      adsets: res,
      fetchingAdsets: false
    }));
  };

  const fetchAds = async () => {
    setState(prevState => ({
      ...prevState,
      fetchingAds: true
    }));
    const adsetId = state.selectedAdset.id;
    const res = await getAds(adsetId, user.xToken);
    console.log("ads", res);
    setState(prevState => ({
      ...prevState,
      ads: res,
      fetchingAds: false
    }));
  };

  const fetchStats = async () => {
    setState(prevState => ({
      ...prevState,
      fetchingStats: true
    }));

    const adId = state.selectedAd.id;
    const res = await getInterestStats(adId, user.xToken);
    console.log("stats", res);
  };

  const handleAccountPagination = async page => {
    const adAccounts = await fbPaginate(page);
    console.log("paginate", adAccounts);
    setState(prevState => ({
      ...prevState,
      adAccounts: adAccounts,
      pagingAccounts: {
        next: adAccounts.paging && adAccounts.paging.next,
        previous: adAccounts.paging && adAccounts.paging.previous
      }
    }));
  };

  const handleCampaignPagination = async page => {
    const campaigns = await fbPaginate(page);
    console.log("paginate", campaigns);
    setState(prevState => ({
      ...prevState,
      campaigns: campaigns,
      pagingCampaigns: {
        next: campaigns.paging && campaigns.paging.next,
        previous: campaigns.paging && campaigns.paging.previous
      }
    }));
  };

  const onSelectionChange = (selectedRowKeys, selectedRows) => {
    console.log("rows", selectedRows);
    const selectedInterest = selectedRows.map(interest => {
      return interest.name;
    });
    setState(prevState => ({
      ...prevState,
      selectedRowKeys,
      selectedInterest,
      selectedRows
    }));
  };

  const handleAccountSelect = (id, name) => {
    setState(prevState => ({
      ...prevState,
      selectedAdAccount: {
        id,
        name
      }
    }));
  };

  const handleCampaignSelect = (id, name) => {
    setState(prevState => ({
      ...prevState,
      selectedCampaign: {
        id,
        name
      },
      campaignModalVisible: false
    }));
  };

  const handleAdsetSelect = (value, option) => {
    console.log("selected", option.props.children);
    setState(prevState => ({
      ...prevState,
      selectedAdset: {
        id: option.props.value,
        name: option.props.children
      }
    }));
  };

  const handleAdSelect = (value, option) => {
    setState(prevState => ({
      ...prevState,
      selectedAd: {
        id: option.props.value,
        name: option.props.children
      }
    }));
  };

  const { Option } = Select;
  const { selectedRowKeys } = state;
  return (
    <div id="performance">
      <Row gutter={16} style={{ width: "100%" }}>
        <Col span={4}>
          <div className="selection">
            <div className="button item">
              <Button
                style={{ textAlign: "left" }}
                className="modalButtons"
                onClick={() => setModalVisible(true, "accountModalVisible")}
                block
              >
                {state.selectedAdAccount.name
                  ? truncate(state.selectedAdAccount.name, 30)
                  : "Select Ad Account"}
              </Button>
            </div>
            <div className="select item">
              <Button
                style={{ textAlign: "left" }}
                onClick={() => setCampaignsModal(true)}
                block
                loading={state.fetchingCampaigns}
                disabled={!!!state.selectedAdAccount.name}
              >
                {state.selectedCampaign.name
                  ? truncate(state.selectedCampaign.name, 30)
                  : "Select Campaign"}
              </Button>
            </div>
            <div className="select item">
              <Select
                disabled={!!!state.selectedCampaign.name}
                value={
                  state.selectedAdset.name
                    ? state.selectedAdset.name
                    : "Select Adset"
                }
                style={{ width: "100%" }}
                placeholder="Select Adset"
                loading={state.fetchingAdsets}
                showSearch
                optionFilterProp="children"
                onSelect={handleAdsetSelect}
                filterOption={(input, option) =>
                  option.props.children
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                }
              >
                {state.adsets
                  ? state.adsets.data.map((item, index) => {
                      return (
                        <Option value={item.id} key={index}>
                          {item.name}
                        </Option>
                      );
                    })
                  : ""}
              </Select>
            </div>
            <div className="select item">
              <Select
                disabled={!!!state.selectedAdset.name}
                style={{ width: "100%" }}
                value={
                  state.selectedAd.name ? state.selectedAd.name : "Select Ad"
                }
                placeholder="Select ad"
                showSearch
                optionFilterProp="children"
                onSelect={handleAdSelect}
                filterOption={(input, option) =>
                  option.props.children
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                }
              >
                {state.ads
                  ? state.ads.data.map((item, index) => {
                      return (
                        <Option value={item.id} key={index}>
                          {item.name}
                        </Option>
                      );
                    })
                  : ""}
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
        visible={state.accountModalVisible}
        onOk={() => setModalVisible(false, "accountModalVisible")}
        onCancel={() => setModalVisible(false, "accountModalVisible")}
        okText="Next"
        cancelText="Previous"
        okButtonProps={{
          disabled: !!!state.pagingAccounts.next,
          onClick: () => handleAccountPagination(state.pagingAccounts.next)
        }}
        cancelButtonProps={{
          disabled: !!!state.pagingAccounts.previous,
          onClick: () => handleAccountPagination(state.pagingAccounts.previous)
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
      <Modal
        title="Select a campaign"
        centered
        visible={state.campaignModalVisible}
        onOk={() => setCampaignsModal(false, "campaignModalVisible")}
        onCancel={() => setCampaignsModal(false, "campaignModalVisible")}
        okText="Next"
        cancelText="Previous"
        okButtonProps={{
          disabled: !!!state.pagingCampaigns.next,
          onClick: () => handleCampaignPagination(state.pagingCampaigns.next)
        }}
        cancelButtonProps={{
          disabled: !!!state.pagingCampaigns.previous,
          onClick: () =>
            handleCampaignPagination(state.pagingCampaigns.previous)
        }}
        width={1300}
      >
        <div className="adAccounts">
          <div className="inner">
            {state.campaigns
              ? state.campaigns.data.map((item, index) => (
                  <div className="account" key={index}>
                    <AdAccount
                      name={item.name}
                      accountId={item.id}
                      // status={item.account_status}
                      onSelect={handleCampaignSelect}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </Modal>
      <style jsx>
        {`
          .modalButtons {
          }
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
