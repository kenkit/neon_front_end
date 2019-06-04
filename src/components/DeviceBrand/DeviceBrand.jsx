import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './styles.scss';

class DeviceBrand extends Component {
  constructor(props) {
    super(props);

    this.state = {
      brandSl: 0,
    };

    this.onChangeBrand = this.onChangeBrand.bind(this);
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  onChangeBrand(event) {
    console.log('target.value => ', event.target.value);
    this.setState({
      brandSl: event.target.value
    })
  }

  render() {

    return (
      <div className="device-brand">
        <h2>Choose your brand</h2>
        <form>
          <table id="flashcontent">
            <tbody>
              <tr>
                <td></td>
                <td>
                  <FormControl >
                    <InputLabel htmlFor="brand_sl">Device Brand</InputLabel>
                    <Select
                      value={this.state.brandSl}
                      onChange={this.onChangeBrand}
                      inputProps={{
                        name: 'brand_sl',
                        id: 'brand_sl',
                      }}
                    >
                      <MenuItem value="">
                        <em>Device Brand</em>
                      </MenuItem>
                      <MenuItem value={1}>Techno</MenuItem>
                      <MenuItem value={2}>Samsung</MenuItem>
                      <MenuItem value={3}>Infinix</MenuItem>
                      <MenuItem value={4}>Oppp</MenuItem>
                    </Select>
                  </FormControl>
                  <div className="example-button-row" layout-align="center center">
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

DeviceBrand.propTypes = {
};

DeviceBrand.defaultProps = {
};

export default DeviceBrand;
