import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import './styles.scss';


class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <h3>Account information for  </h3>
        <table style={{width:'400px'}} border="1px">
          <tbody>
            <tr>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <td>
                <div><span>User Id: </span></div>
                <div><span>User: </span></div>
                <div><span>Email: </span></div>
                <div><span>Credits: </span></div>
              </td>
              <td>
                <div className="example-button-row">
                  <Button variant="contained" color="secondary">
                    Buy credits
                  </Button>
                </div>
                <div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Account.propTypes = {
  login: PropTypes.func,
};

Account.defaultProps = {
  login: () => {},
};

export default Account;
