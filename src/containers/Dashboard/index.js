import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Dashboard from '../../components/Dashboard';
import loginOperations from '../../ducks/Login/operations';


const mapStateToProps = (state, ownProps) => {
  return {
    user: {
      username: state.login.username,
    },
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: (cb) => loginOperations.logout(cb)(dispatch),
});

const DashboardContainer = connect(mapStateToProps, mapDispatchToProps)(withRouter(Dashboard));

export default DashboardContainer;
