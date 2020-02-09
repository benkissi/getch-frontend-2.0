import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Button, Input, Tag } from "antd";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

import DashboardLayout from '../components/dashboardLayout'
import Header from '../components/header'
import InterestTable from '../components/table'

import {tableColumns} from '../utils/table'
import {addScore, getInterestNames} from '../utils/search'

import decodeToken from "../utils/auth";
import { addingCurrentUser, authFacebook } from "../redux/user/user-actions";
import {searchStart} from '../redux/search/search-actions'


const Index = props => {
  const [state, setState] = useState({})
  const { 
      token, 
      user, 
      addUser, 
      fbToken, 
      interestData, 
      searchInterest, 
      keyword,
      interestCount } = props;
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
        domain
      };
      addUser(userData);
    } else if (user) {
      console.log(user);
    } else {
      router.push("/signin");
    }
  }, []);

  useEffect(() => {
    setState({
      interests: interestData,
      interestNumber: interestCount
    })
  }, [interestData, interestCount])

  const faceAuthStart = () => {
    console.log('#### FB auth start')
  }

  const responseFacebook = async (res) => {
    const {authFb, user} = props
    const {accessToken} = res
    authFb(accessToken, user.id)
  }

  const getInterest = async (value) => {
    await searchInterest(fbToken.token, value, 500)
  }

  const onSelectionChange = (selectedRowKeys, selectedRows) => {
    
    const selectedInterest = selectedRows.map(interest => {
      return interest.name
    })
    console.log(selectedInterest)
    setState({
      ...state,
      selectedRowKeys,
      selectedInterest
    })
  }

  const actions = [
    <FacebookLogin
        appId={process.env.FB_APP_ID}
        autoLoad={true}
        fields="name,email,id"
        onClick={faceAuthStart}
        scope="ads_management, email"
        callback={responseFacebook} 
        render={renderProps => (
          <Button type="primary" onClick={renderProps.onClick}>Connect Facebook</Button>
        )}
        />
  ]

  const {interests, selectedRowKeys, interestNumber} = state
  return (
    <DashboardLayout>
    <div id="wrapper">
      <Header actions={actions}/>
      <div id="main-content">
        <Search
            placeholder="Find Facebook interest for a keyword"
            enterButton="Getch"
            size="large"
            onSearch={(value) => getInterest(value)}
          />
          {
            interestNumber ?
            <p><b>{interestNumber}</b> interest found for "{keyword}"</p>
            : ''
          }
          <div id="table">
            <InterestTable 
            onSelection={onSelectionChange} 
            selectedRowKeys={selectedRowKeys} 
            className="table" columns={tableColumns} 
            dataSource={interests}/>
          </div>
          
      </div>
        

      <style jsx>{`
        #wrapper {
          margin: 10px;
        }
        #main-content {
          margin-top: 30px;
        }
        #table {
          margin-top: 30px;
        }
      `}</style>
    </div>
    </DashboardLayout>
  );
};

Index.getInitialProps = async function(context) {
  const token = context.query.at;
  return {
    token
  };
};

const mapStateToProps = state => ({
  user: state.user.currentUser,
  fbToken: state.user.fbToken,
  interestData: state.search.interests,
  interestCount: state.search.interestCount,
  keyword: state.search.keyword
});

const mapDispatchToProps = dispatch => ({
  addUser: item => dispatch(addingCurrentUser(item)),
  authFb: (token, id) => dispatch(authFacebook({token, id})),
  searchInterest: (token, value, limit) => dispatch(searchStart({token, value, limit}))
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
