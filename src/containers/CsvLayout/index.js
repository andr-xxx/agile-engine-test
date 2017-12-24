import React, {Component} from 'react';
import {CsvComponent} from '../../components/Csv/index'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as parseCsv from '../../actions/parseCsv';

import './style.css';

class CsvLayoutContainer extends Component {
  constructor() {
    super();
    this.state = {
      csv: `number,string,date\n25,"test,tests2",24 Dec 1800\n24,someOne"else,13 Dec 1790\n907, ,25 Jan 1991`,
      isButtonClicked: false
    };
  }

  parseValue() {
    this.props.actions.parseCsvSync(this.state.csv);
    this.setState({isButtonClicked: true})
  }

  onCsvChange(event) {
    this.setState({
      csv: event.target.value
    });

    if (this.state.isButtonClicked) {
      this.props.actions.parseCsvAsync(event.target.value);
    }
  }

  reset() {
    this.setState({
      isButtonClicked: false,
      csv: ''
    });

    this.props.actions.resetChanges();
  }

  render() {
    return (
      <div className='input-cvs'>
        <CsvComponent
          onCsvChange={this.onCsvChange.bind(this)}
          parseCsv={this.parseValue.bind(this)}
          reset={this.reset.bind(this)}
          isButtonClicked={this.state.isButtonClicked}
          defaultValue={this.state.csv}
        />
      </div>
    );
  }
}

export default connect(() => {
  return {}
}, (dispatch) => {
  return {actions: bindActionCreators(parseCsv, dispatch)};
})(CsvLayoutContainer);
