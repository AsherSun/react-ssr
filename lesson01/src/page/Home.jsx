import React from 'react';
import {connect} from 'react-redux';
import { getUserInfo } from '@/store/user';

function User(props) {
  const {title} = props.userinfo;
  return (
    <div>
      <h1>Home页面!!{title}</h1>
    </div>
  );
}
User.loadData = (store) => {
  return store.dispatch(getUserInfo())
}
export default connect(
  state => {
    return ({userinfo: state.user.userinfo})
  },
  {getUserInfo}
)(User);