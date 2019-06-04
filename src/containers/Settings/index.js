import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Settings from '../../components/Settings';

const mapStateToProps = (state, ownProps) => {
  return {
    user: {
      username: state.login.username,
      profilePic: state.settings.profilePic,
    },
  };
};

const mapDispatchToProps = (dispatch) => ({
});

const SettingsContainer = connect(mapStateToProps, mapDispatchToProps)(withRouter(Settings));

export default SettingsContainer;
