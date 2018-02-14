import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import { getAds } from "../../reducers/ad/adActions";
import { getAdMetrics } from "../../reducers/adMetric/adMetricActions";
import DataTable from '../../components/DataTable/DataTable';
import {DATA_TABLE_SETTINGS} from "../../lib/config";

function mapStateToProps(state) {
  return {
    ads: state.ads,
    adMetrics: state.adMetrics,
    settings: state.settings,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ getAds, getAdMetrics }, dispatch),
  };
}
class Home extends Component {
  constructor() {
    super();
    this.state = {columns: []};
  }
  componentWillMount() {
    console.log('Home: ', this.props);
    this.props.actions.getAdMetrics();
    this.props.actions.getAds();
  }
  componentWillReceiveProps(nextProps) {
    const { settings, ads, adMetrics } = nextProps

    const columns = _.map(settings, name => {
      return {
        name,
        width: DATA_TABLE_SETTINGS.DEFAULT_WIDTH,
        fixed: !!_.find(DATA_TABLE_SETTINGS.STATIC_COLUMNS, (col) => (col == name))
      }
    });

    const combinedData = _.map(ads, function(item){
      return _.extend(item, _.find(adMetrics, { remote_id: item.remote_id }));
    });
    this.setState({
      columns,
      combinedData
    })
  }
  render() {
    const { ads, adMetrics, settings } = this.props;
    const { columns, combinedData } = this.state;
    console.log('Home: render ', this.props, this.state);
    return (
      <div style={{padding: '50px 0px'}}>
        <DataTable columns={columns} data={combinedData} />
      </div>
    );
  }
}

Home.propTypes = {};
Home.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
