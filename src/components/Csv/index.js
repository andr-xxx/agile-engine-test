import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export const CsvComponent = ({onCsvChange, parseCsv, isButtonClicked, defaultValue, reset}) => (
  <div className='csv-input'>
    <h2>CSV</h2>
    <textarea onChange={onCsvChange}
              value={defaultValue}
              name="csv" id="csv" cols="30" rows="10">
    </textarea>
    <div className='button-bar'>
      <button className='btn btn-reset'
              onClick={reset}>
        Reset
      </button>
      <button
        className='btn'
        style={{display: isButtonClicked ? 'none' : 'inline-block'}}
        onClick={parseCsv}>
        Parse Csv
      </button>
    </div>
  </div>
);

CsvComponent.propTypes = {
  onCsvChange: PropTypes.func.isRequired,
  parseCsv: PropTypes.func.isRequired,
  isButtonClicked: PropTypes.bool.isRequired,
  defaultValue: PropTypes.string.isRequired,
  reset: PropTypes.func.isRequired,
};