import React, {Component} from 'react';
import {connect} from 'react-redux';
import Sorting from '../../helpers/Sorting';
import {TableComponent} from '../../components/Table/index';

class TableLayoutContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inOrder: true
    };
    this.sorting = new Sorting();
  }

  tableSort(index) {
    this.setState({
      inOrder: !this.state.inOrder,
      tableData: this.sorting.sortTable(this.state.tableData, index, !this.state.inOrder)
    });

  }

  componentWillReceiveProps(newProps) {
    this.setState({
      tableData: newProps.parsedCsv.csv
    })
  }

  render() {
    if (this.state.tableData) {
      const head = this.state.tableData[0];
      const body = this.state.tableData.slice(1);
      return (
        <TableComponent
          head={head}
          body={body}
          tableSort={this.tableSort.bind(this)}
        />
      );
    }

    return null
  }
}

export default connect((state) => {
  return {parsedCsv: state.csv};
})(TableLayoutContainer);
