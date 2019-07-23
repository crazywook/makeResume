import {call, put, takeEvery} from "redux-saga/effects";

import {fetchDeveloperHistory} from "../../request/developerHistory";
import {DEVELOPER_HISTORY_REQUEST, DeveloperHistoryAction} from "./action";

export function* watchRequestDeveloperHistory()
{
  yield takeEvery(DEVELOPER_HISTORY_REQUEST, loadDeveloperHistory);
}

const developerHistoryMock = [
  {
    id: 1,
    startedAt: new Date("2016-06"),
    title: "케이지 아이티뱅크 웹개발",
    contents: [
      "C, JAVA, JSP, SPRING",
    ],
  },
  {
    id: 2,
    startedAt: new Date("2017-07"),
    title: "온넷애드 입사",
    contents: [
      "포항공과대학 식당앱",
      "오픈마켓 쇼핑몰",
      "가상화폐거래소 프로토타입 등",
      "Spring, restAPI서버 개발",
    ],
  },
  {
    id: 3,
    startedAt: new Date("2018.04"),
    title: "액션 래빗 입사",
    contents: [
      "Tlendy App"
    ]
  }
];

function* loadDeveloperHistory()
{
  console.log("loadDeveloperHistory");
  const {error, response} = yield call(fetchDeveloperHistory);
  console.log("error", error);
  if (error) {
    yield put(DeveloperHistoryAction.requestDeveloperHistoryFail());
    yield put(DeveloperHistoryAction.receiveDeveloperHistory({ developerHistory: developerHistoryMock }));
    return;
  }
  yield put(DeveloperHistoryAction.receiveDeveloperHistory(response));
}
