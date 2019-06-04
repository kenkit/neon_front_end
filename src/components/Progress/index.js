import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Progress from './Progress';

const mapStateToProps = (state, ownProps) => {
  return {
    temperature: state.weather.temperature,
    forecast: state.weather.forecast,
    area: state.weather.area,
  };
};

const mapDispatchToProps = (dispatch) => ({
});

const WidgetContainer = connect(mapStateToProps, mapDispatchToProps)(withRouter(Progress));

export default WidgetContainer;
