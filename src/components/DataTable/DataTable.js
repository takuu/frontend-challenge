import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import './DataTable.css';
import DataHeader from "./DataHeader";
import DataRows from "./DataRows";

class DataTable extends Component {
  render() {
    const { data, columns } = this.props;

    const staticColumns = _.filter(columns, {fixed: true});
    const dynamicColumns = _.filter(columns, {fixed: false});

    return (
      <div className="table-container">
        <div className="table-column-left">
          <DataHeader isStatic={true} columns={staticColumns} />
          <DataRows columns={staticColumns} data={data} isStatic={true}></DataRows>
        </div>
        <div className="table-column-right">
          <DataHeader isStatic={false} columns={dynamicColumns} />
          <DataRows columns={dynamicColumns} data={data} isStatic={false}></DataRows>
        </div>
      </div>

    );
  }
}

DataTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string),
  data: PropTypes.arrayOf(PropTypes.object),
};
DataTable.defaultProps = {
  columns: [],
  data: [],
};

export default DataTable;
