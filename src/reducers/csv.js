import {
  PARSE_CSV,
  RESET_CSV_PARSE
} from '../constants/csv'

const csv = (state = {}, action) => {
  switch (action.type) {
    case PARSE_CSV:
      return {...state, csv: action.payload};
    case RESET_CSV_PARSE:
      return {...state, csv: null};
    default:
      return state;
  }
};

export default csv;