import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';

import './styles.scss';


class DeviceDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deviceId: 0,
      author: 'details',
      message: 'this is a test message',
      progress_val: 0,
      current_window:3
    };
  }

  componentDidUpdate() {
  }

  onChangeBrand(event) {
    console.log('target.value => ', event.target.value);
    this.setState({
      deviceId: event.target.value
    })
  }

  render() {
    return (
      <div className="device-detail">
        <h2>Choose your model</h2>
        <form>
          <table id="flashcontent">
            <tbody>
            <tr>
              <td></td>
              <td>
                <FormControl >
                  <InputLabel htmlFor="device_detail">Gadget</InputLabel>
                  <Select
                    value={this.state.deviceId}
                    onChange={this.onChangeBrand}
                    inputProps={{
                      name: 'device_detail',
                      id: 'device_detail',
                    }}
                  >
                    <MenuItem value=""><em>Gadget</em></MenuItem>
                    <MenuItem value={1}>X557</MenuItem>
                    <MenuItem value={2}>X606</MenuItem>
                    <MenuItem value={3}>N5S</MenuItem>
                    <MenuItem value={4}>X551</MenuItem>
                  </Select>
                </FormControl>
                <div className="example-button-row">
                  <Tooltip title="Press next to continue"><Button variant="contained" color="secondary" >Next</Button></Tooltip>
                </div>
              </td>
              <td></td>
            </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}

DeviceDetails.propTypes = {
};

DeviceDetails.defaultProps = {
};

export default DeviceDetails;
