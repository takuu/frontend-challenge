import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import './DataTable.css';

class DataRows extends Component {
  render() {
    const { data, columns, isStatic } = this.props;
    return (
      <div>
        {
          _.map(data, (item, key) => {
            const row = _.map(columns, ({name}, index) => (<div className={'num truncate'} key={name + index}>{item[name]}</div>));
            return (
              <div className={`${isStatic ? 'table-row-static': 'table-row'}`} key={key}>{row}</div>
            )
          })
        }
      </div>
    );
  }
}

DataRows.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  columns: PropTypes.arrayOf(PropTypes.object),
  isStatic: PropTypes.bool,
};
DataRows.defaultProps = {
  data: [],
  columns: [],
  isStatic: false
};

export default DataRows;
