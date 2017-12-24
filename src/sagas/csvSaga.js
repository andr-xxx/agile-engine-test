import {delay} from 'redux-saga'
import CsvParser from "../helpers/CsvParser";
import {call, put, takeLatest, all} from 'redux-saga/effects'

import {
  CSV_PARSE_ASYNC,
  CSV_PARSE_SYNC,
  PARSE_CSV
} from '../constants/csv'

const DELIMITER = '\n';
const DELAY = 500;
const parser = new CsvParser(DELIMITER);

function* parseSync(action) {
  const parsedCsv = parser.parseCsv(action.payload);
  yield put({
    type: PARSE_CSV,
    payload: parsedCsv
  })
}

function* parseAsync(action) {
  yield call(delay, DELAY);
  const parsedCsv = parser.parseCsv(action.payload);
  yield put({
      type: PARSE_CSV,
      payload: parsedCsv
    })
}

function* watchParseSync() {
  yield takeLatest(CSV_PARSE_SYNC, parseSync)
}

function* watchParseAsync() {
  yield takeLatest(CSV_PARSE_ASYNC, parseAsync)
}


export default function* csvSaga() {
  yield all([
    watchParseSync(),
    watchParseAsync()
  ])
}
