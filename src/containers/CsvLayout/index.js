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
      csv: `number,stringm,date
      25,"test,tests2",24 Dec 1800
      24,someOne"else,13 Dec 1790
      907, ,25 Jan 1991`,
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
      setTimeout( () => {
        this.props.actions.parseCsvAsync(this.state.csv);
      }, 0)
    }
  }

  reset() {
    this.setState({
      isButtonClicked: false
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

export default connect(() => {return {}}, (dispatch) => {
  return {actions: bindActionCreators(parseCsv, dispatch)};
})(CsvLayoutContainer);
