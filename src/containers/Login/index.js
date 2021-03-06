import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Account from '../../components/Account';
import operations from '../../ducks/Login/operations';

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  login: (username, password, cb) => operations.login(username, password, cb)(dispatch),
  logout: operations.logout,
});

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(withRouter(Account));

export default LoginContainer;
