import {call, put, takeEvery} from "redux-saga/effects"

import {fetchDeveloperHistory} from "../../request/developerHistory"
import {DEVELOPER_HISTORY_REQUEST, DeveloperHistoryAction} from "./action"

export function* watchRequestDeveloperHistory()
{
  yield takeEvery(DEVELOPER_HISTORY_REQUEST, loadDeveloperHistory);
}

function* loadDeveloperHistory({type, payload: {name}})
{
  console.log("payload", name)
  const {data, error} = yield call(fetchDeveloperHistory, name);
  yield put(DeveloperHistoryAction.requestDeveloperHistoryFinish());
  if (error) {
    yield put(DeveloperHistoryAction.requestDeveloperHistoryFail());
    return;
  }
  yield put(DeveloperHistoryAction.receiveDeveloperHistory({developerHistory: data}));
}
