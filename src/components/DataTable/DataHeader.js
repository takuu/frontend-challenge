import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import './DataTable.css';

class DataHeader extends Component {
  render() {
    const { isStatic, columns } = this.props;
    return (
      <div>
        <div className={`${ isStatic ? 'table-row-static' : 'table-row'}`} key={-1}>{_.map(columns, ({name}, index) => (<div className={'num truncate'} key={name + index}>{name}</div>))}</div>

      </div>
    );
  }
}

DataHeader.propTypes = {
  isStatic: PropTypes.bool,
  columns: PropTypes.arrayOf(PropTypes.object)
};
DataHeader.defaultProps = {
  isStatic: false,
  columns: [],
};

export default DataHeader;
