import {call, put, takeEvery} from "redux-saga/effects";

import {requestProjects} from "../../request/project";
import {
  ProjectActions,
  PROJECTS_RECEIVED,
  PROJECTS_REQUEST,
  PROJECTS_REQUEST_FAILED,
  PROJECTS_REQUEST_FINISHED,
} from "./action";
import {ProjectDto} from "./types";

export function* watchRequestProjects() {
  console.log("watchRequestProjects");
  yield takeEvery(PROJECTS_REQUEST, loadProjects );
}

const projectsMock: ProjectDto[] = [
  {
    id: 1,
    title: "트렌디",
    description: "트렌디 앱은 20 ~ 30대 여성들을 상대로 하는 패션 정기구독 서비스입니다.",
    startedAt: new Date("2018-04-18"),
    webUrl: "http://tlendy.com",
    iosUrl: "https://apps.apple.com/kr/app/tlendy-트렌디-패션-정기구독-서비스/id1404289501",
    androidUrl: "https://play.google.com/store/apps/details?id=co.actionrabbit.tlendy&hl=ko&showAllReviews=true",
    implement: `nodeJs 와 Typescript로 만든 RestAPI 서버
    서버 프레임워크는 Express에 routing-controllers 사용
    DB: MYSQL
    티켓구매페이지는 SSR로 구현
    ORM은 Sequelize 사용
    기타 라이브러리: lodash, moment
    클라이언트: Typescript, React, Redux, Cordova로 구현`
  },
];

export function* loadProjects() {
  console.log("load projects");
  const a = yield put({
    type: PROJECTS_RECEIVED,
    payload: {projects: projectsMock}
  });
  console.log("put", a);
  // const {projects, error} = yield call(requestProjects);
  // if (error) {

  //   yield put({type: PROJECTS_REQUEST_FAILED});
  //   yield put({
  //     type: PROJECTS_RECEIVED,
  //     projects: projectsMock
  //   });
  //   console.log("saga error flow")
  //   return;
  // }

  // yield put({
  //   type: PROJECTS_RECEIVED,
  //   projects
  // });
}
