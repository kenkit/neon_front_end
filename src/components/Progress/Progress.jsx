import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

class Progress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deviceId: 0
    };
  }

  componentDidMount() {
  }

  progress(value: number) {
    const progress = value / 100;
    this.dashoffset = this.circumference * (1 - progress);
  }

  degToRad(degree) {
    const factor = Math.PI / 180;
    return degree * factor;
  }

  renderTime(progress_val) {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    ctx.strokeStyle = '#28d1fa';

    ctx.lineWidth = 17;
    ctx.lineCap = 'round';
    ctx.shadowBlur = 15;
    ctx.shadowColor = '#28d1fa';
    let newSeconds = 0;
    let oldprogress = progress_val;

    if (progress_val === 100) {
      progress_val = 99;
    }
    newSeconds = (progress_val / 100) * 60;
    let gradient;

    // Background
    gradient = ctx.createRadialGradient(200, 200, 5, 200, 200, 300);
    gradient.addColorStop(0, '#09303a');
    gradient.addColorStop(1, '#000000');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 300, 300);

    // Seconds
    ctx.beginPath();
    ctx.arc(125, 125, 110, this.degToRad(280), this.degToRad((newSeconds * 6) - 80));

    ctx.stroke();
// Date
    ctx.font = '20px Helvetica';
    ctx.fillStyle = '#28d1fa';
    ctx.fillText('Flashing device', 50, 120);

    // Time
    ctx.font = '15px Helvetica';
    ctx.fillStyle = '#28d1fa';
    ctx.fillText('Status ' + oldprogress + '%', 50, 140);
  }


  render() {
    return (
      <div className="canvasWrapper">
        <canvas id="canvas" width="250" height="250"></canvas>
      </div>
    );
  }
}

Progress.propTypes = {
  getAirTemperature: PropTypes.func.isRequired,
  getWeatherForecast: PropTypes.func.isRequired,
  temperature: PropTypes.number,
  area: PropTypes.string,
};

Progress.defaultProps = {
  temperature: 0,
  area: '',
};

export default Progress;
