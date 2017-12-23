import csvSaga from './csvSaga'
import {all} from 'redux-saga/effects'

export default function* rootSaga() {
  yield all([
    csvSaga()
  ])
}