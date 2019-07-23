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
    클라이언트: Typescript, React, Redux, Cordova로 구현`,
    businessLogics: [
      {
        title: "🔓 로그인",
        contents: "kakao, facebook OAuth",
      },
      {
        title: "🛎 알림 구현",
        contents: "kakao talk 알림 메시지를 이용",
      },
      {
        title: "📆 배치",
        contents: [
`정기 배치 : 배송 알림, 상품목록
성능 향상을 위해 실제 데이터와 고객이 보는 데이타를 분리, 고객이 보는 데이터는 매시간 배치를 통해 생성`,
`통계용 데이타
일일 이용률, 대여율, 일주일간 찜 랭킹 등의 데이타 집계 결과를 통계 테이블에 저장`,
`멤버십 만료 알림`,
        ]
      },
      {
        title: "🗂 대여 이력관리",
        contents: [
          `상품 상태와 상품 로그 테이블을 분리하여 관리`,
          `배송테이블 하위에 배송 상품 테이블과 배송 단계 테이블을 분리하여 관리`,
        ]
      },
      {
        title: "📕 멤버십 관리",
        contents: [
          `멤버십에는 사용 기간이 있음`,
          `멤버십과 멤버십 사이 이용이 끊기지 않고 이어져야 함`,
          `멤버십은 시즌별 대여가능 벌수에 따라 나누어짐`,
          `멤버십은 프로모션에 따라 티켓 개수와 판매시간의 제한이 있음`,
        ]
      },
      {
        title: "📦 배송 관리",
        contents: [
          `배송 단계는 크게 배송, 반납, 검수 단계로 나눠 지고 각 단계는 다른 세부 단계로 나눠짐`,
          `배송은 ready, started, completed, canceled`,
          `반납은 ready, requested, started, completed`,
          `검수는 started, completed`,
        ]
      }
    ]
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
