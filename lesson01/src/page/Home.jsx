import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import { getUserInfo } from '@/store/user';

function Home(props) {
  const {title} = props.userinfo;
  useEffect(() => {
    if (!Object.keys(props.userinfo).length) {
      props.getUserInfo();
    }
  }, []);
  return (
    <div>
      <h1>Home页面!!{title}</h1>
    </div>
  );
}
Home.loadData = (store) => {
  return store.dispatch(getUserInfo())
}
export default connect(
  state => {
    return ({userinfo: state.user.userinfo})
  },
  {getUserInfo}
)(Home);