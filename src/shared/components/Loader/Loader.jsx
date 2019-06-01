import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import LinearProgress from '@material-ui/core/LinearProgress';
import LoaderPinner from 'react-loader-spinner'
import './styles.scss';

class Loader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      offLoader: !props.activate,
    };

    this.dismissLoader = this.dismissLoader.bind(this);
  }

  componentDidMount() {
    const {
      activate,
      timeout,
    } = this.props;
    if (activate && timeout !== -1) {
      document.body.classList.toggle('noscroll', true);
      this.dismissLoader(this.props);
    }
  }

  componentWillReceiveProps(nextProps) {
    const {
      activate,
      timeout,
    } = this.props;
    if (activate && timeout !== -1) {
      this.dismissLoader(nextProps);
    }
  }

  componentWillUnmount() {
    console.log('unmount');
    clearTimeout(this.timer);
    clearTimeout(this.loaderTimer);
  }

  dismissLoader(props) {
    if (isEmpty(this.timer) && props.timeout !== -1) {
      this.timer = setTimeout(() => {
        console.log('clear timer');
        props.timeoutFn();
        clearTimeout(this.timer);
        this.timer = null;

        this.loaderTimer = setTimeout(() => this.setState({
          offLoader: true,
        }, () => {
          clearTimeout(this.loaderTimer);
          this.loaderTimer = null;
          document.body.classList.toggle('noscroll', false);
        }), 400);

      }, props.timeout);
    }
  }

  render() {
    const {
      activate,
    } = this.props;
    const {
      offLoader,
    } = this.state;

    const loaderClasses = !activate ? 'loader-container fadeOut' : 'loader-container';
    const loaderStyle = {
      left: document.body.scrollLeft,
      top: document.body.scrollTop,
    };
    return (
      !offLoader ?
      <div className={loaderClasses} style={loaderStyle}>
        <div className="loader-box">
          <LoaderPinner
            type="Oval"
            color="#e423dd"
            height="64"
            width="64"
          />
          <div className="loader-message" style={{width:'200px', color:'white', textAlign:'center'}}>Connecting to service</div>
          <LinearProgress color="secondary" variant="determinate" value={70} />
        </div>
      </div> :
      null
    );
  }
}

Loader.propTypes = {
  activate: PropTypes.bool,
  timeoutFn: PropTypes.func,
  timeout: PropTypes.number,
};

Loader.defaultProps = {
  activate: false,
  timeoutFn: () => {},
  timeout: -1,
};

export default Loader;
