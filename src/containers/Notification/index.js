import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Notification from '../../components/Notification';

const onRead = () => {
};

const mapStateToProps = (state, ownProps) => {
  return {
    showToast: state.notification.status,
    messages: state.notification.messages,
  };
};

const mapDispatchToProps = dispatch => ({
  onRead,
});

const NotificationContainer = connect(mapStateToProps, mapDispatchToProps)(withRouter(Notification));

export default NotificationContainer;
