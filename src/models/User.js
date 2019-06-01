import PropTypes from 'prop-types';

const User = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  username: PropTypes.string,
  credits: PropTypes.number,
  email: PropTypes.string,
});

export default User;
