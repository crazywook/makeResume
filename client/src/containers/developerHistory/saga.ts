import {call, put, takeEvery} from "redux-saga/effects"

import {fetchDeveloperHistory} from "../../request/developerHistory"
import {DEVELOPER_HISTORY_REQUEST, DeveloperHistoryAction} from "./action"

export function* watchRequestDeveloperHistory()
{
  yield takeEvery(DEVELOPER_HISTORY_REQUEST, loadDeveloperHistory);
}

function* loadDeveloperHistory()
{
  const {data, error} = yield call(fetchDeveloperHistory);
  yield put(DeveloperHistoryAction.requestDeveloperHistoryFinish());
  if (error) {
    yield put(DeveloperHistoryAction.requestDeveloperHistoryFail());
    return;
  }
  yield put(DeveloperHistoryAction.receiveDeveloperHistory({developerHistory: data}));
}
