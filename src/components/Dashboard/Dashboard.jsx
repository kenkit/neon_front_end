import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import './styles.scss';
import Loader from '../../shared/components/Loader';
import Account from '../Account';
import DeviceBrand from '../DeviceBrand';


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarVisible: false,
      isLoading: true,
      tabIndex: 0,
    };

    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.stopLoading = this.stopLoading.bind(this);
    this.onTabChange = this.onTabChange.bind(this);
  }

  onTabChange (event, newValue) {
    this.setState({
      tabIndex: newValue,
    });
  }

  toggleSidebar() {
    const {
      sidebarVisible,
    } = this.state;
    this.setState({
      sidebarVisible: !sidebarVisible,
    });
  }

  stopLoading() {
    this.setState({
      isLoading: false,
    });
  }

  render() {
    const {
      tabIndex,
      isLoading
    } = this.state;

    const tabContent1 = (
      <div id="prgsize" style={{ height: '300px', backgroundColor: 'rgba( 255,  255, 255, 0.5)' }}>
        <h1>Gadget Central</h1>
        <table id="table">
          <tr>
          </tr>
        </table>
      </div>);
    const tabContent2 = (
      <div id="prgsize" style={{ height: '300px', backgroundColor: 'rgba( 255,  255, 255, 0.5)' }}>
        <h1>Transfer Operations</h1>
      </div>);
    const tabContent3 = (
      <div id="prgsize" style={{ height: '300px', backgroundColor: 'rgba( 255,  255, 255, 0.5)' }}>
        <h1>Account|Credits</h1>
        <Account></Account>
      </div>);
    const tabContent4 = (
      <div id="prgsize" style={{ height: '300px', backgroundColor: 'rgba( 255,  255, 255, 0.5)' }}>
        <h1>About Neon</h1>
        <div className="about-us">
          <h4>Maintainer:Sage</h4>
          <h4>Neon version:1.920020</h4>
          <br></br>
          <h4>Build id:1.12232</h4>
          <h4>Build data:12/12/2020</h4>
        </div>
      </div>);
    return (
      <div className="dashboard">
        <div className="dashboardContents">
          <AppBar position="static" color='default'>
            <Tabs value={tabIndex} onChange={this.onTabChange}>
              <Tab label="Gadget Central" />
              <Tab label="Transfer Operations" />
              <Tab label="Account|Credits" />
              <Tab label="About Neon" />
            </Tabs>
          </AppBar>
          {tabIndex === 0 && tabContent1}
          {tabIndex === 1 && tabContent2}
          {tabIndex === 2 && tabContent3}
          {tabIndex === 3 && tabContent4}
        </div>
        <Loader activate={isLoading} timeout={2000} timeoutFn={this.stopLoading} />
      </div>
    );
  }
}

Dashboard.defaultProps = {
};

export default Dashboard;
