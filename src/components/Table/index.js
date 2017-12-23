import React from 'react';
import PropTypes from 'prop-types';
import './style.css'

export const TableComponent = ({head, body, tableSort}) => (
  <div className='table-component'>
    <h2>Result</h2>
    <table>
      <thead>
      <tr>
        {
          head.map((item, index) => (
            <th onClick={tableSort.bind(null, index)}
                key={item + index}>{item}</th>
          ))
        }
      </tr>
      </thead>
      <tbody>
      {
        body.map((item, index) => (
          <tr key={index + item}>
            {
              item.map((str, index) => (
                <td key={item + index}>{str}</td>
              ))
            }
          </tr>
        ))
      }
      </tbody>
    </table>
  </div>
);

TableComponent.propTypes = {
  head: PropTypes.array.isRequired,
  body: PropTypes.array.isRequired,
  tableSort: PropTypes.func.isRequired,
};