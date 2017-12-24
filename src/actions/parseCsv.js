import {
  CSV_PARSE_SYNC,
  CSV_PARSE_ASYNC,
  RESET_CSV_PARSE
} from '../constants/csv';

export function parseCsvSync(parsedCsv) {
  return {
    type: CSV_PARSE_SYNC,
    payload: parsedCsv
  };
}

export function parseCsvAsync(parsedCsv) {
  return {
    type: CSV_PARSE_ASYNC,
    payload: parsedCsv
  };
}

export function resetChanges() {
  return {
    type: RESET_CSV_PARSE
  }
}