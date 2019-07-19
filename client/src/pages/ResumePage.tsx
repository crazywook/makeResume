import * as React from "react";

import {Contact} from "../components/applicantInfo/Contact";
import {Name} from "../components/applicantInfo/Name";
import {ResumeBody} from "../components/applicantInfo/ResumeBody";
import {Spec} from "../components/applicantInfo/Spec";
import {Project} from "../components/project/Project";
import {ApplicantInfoContainer} from "../containers/applicantInfo/ApplicantInfoContainer";
import {ProjectContainer} from "../containers/project/ProjectContainer";

export const ResumePage: React.SFC<{}> = () =>
  <ResumeBody>
    <ApplicantInfoContainer>
      {props => props.isApplicantInfoLoading
          ? <div>loading...</div>
          : <>
            <Name name={props.applicantInfo.name} />
            <Contact
              email={props.applicantInfo.email}
              phone={props.applicantInfo.phone}
            />
            <Spec
              career={props.applicantInfo.career}
              skillStack={props.applicantInfo.skillStack}
            />
          </>
      }
    </ApplicantInfoContainer>
    <hr  />
    <ProjectContainer >
      {props => !props
        ? <div>loading...</div>
        : <Project projects={props.projects} />
      }
    </ProjectContainer>
          <div
            className=""><strong>Business Logic</strong>
            <div className="indented">
              <div
                className="">🔓 로그인<div className="indented">
                  <p
                    className="">kakao, facebook OAuth</p>
                </div>
              </div>
              <div
                className="">🛎 알림 구현<div className="indented">
                  <p
                    className="">kakao talk 알림 메시지를 이용</p>
                </div>
              </div>
              <div
                className="">📆 배치<div className="indented">
                  <ul
                      className="bulleted-list">
                    <li>정기 배치 : 배송 알림, 상품목록
                      성능 향상을 위해 실제 데이터와 고객이 보는 데이타를 분리, 고객이 보는 데이터는 매시간 배치를 통해 생성</li>
                  </ul>
                  <ul
                      className="bulleted-list">
                    <li>통계용 데이타
                      일일 이용률, 대여율, 일주일간 찜 랭킹 등의 데이타 집계 결과를 통계 테이블에 저장</li>
                  </ul>
                  <ul
                      className="bulleted-list">
                    <li>멤버십 만료 알림</li>
                  </ul>
                </div>
              </div>
              <div
                className="">🗂 대여 이력관리<div className="indented">
                  <ul
                      className="bulleted-list">
                    <li>상품 상태와 상품 로그 테이블을 분리하여 관리</li>
                  </ul>
                  <ul
                      className="bulleted-list">
                    <li>배송테이블 하위에 배송 상품 테이블과 배송 단계 테이블을 분리하여 관리</li>
                  </ul>
                  <p
                    className="">
                  </p>
                </div>
              </div>
              <div
                className="">📕 멤버십 관리<div className="indented">
                  <ul
                      className="bulleted-list">
                    <li>멤버십에는 사용 기간이 있음</li>
                  </ul>
                  <ul
                      className="bulleted-list">
                    <li>멤버십과 멤버십 사이 이용이 끊기지 않고 이어져야 함</li>
                  </ul>
                  <ul
                      className="bulleted-list">
                    <li>멤버십은 시즌별 대여가능 벌수에 따라 나누어짐</li>
                  </ul>
                  <ul
                      className="bulleted-list">
                    <li>멤버십은 프로모션에 따라 티켓 개수와 판매시간의 제한이 있음</li>
                  </ul>
                </div>
              </div>
              <div
                className="">📦 배송 관리<div className="indented">
                  <ul
                      className="bulleted-list">
                    <li>배송 단계는 크게 배송, 반납, 검수 단계로 나눠 지고 각 단계는 다른 세부 단계로 나눠짐<ul
                          className="bulleted-list">
                        <li>배송은 ready, started, completed, canceled</li>
                      </ul>
                      <ul
                          className="bulleted-list">
                        <li>반납은 ready, requested, started, completed</li>
                      </ul>
                      <ul
                          className="bulleted-list">
                        <li>검수는 started, completed</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <hr  />
            </div>
          </div>
          <h3
              className="">개발 연혁</h3>
          <div
              className="column-list">
            <div
                style={{
                  width: "29.166666666666664%",
                }}
                className="column">
              <p
                className="">2016. 06</p>
              <p
                className="">케이지아이티뱅크 웹개발 이수</p>
              <p
                className="">C, JAVA, JSP, SPRING</p>
            </div>
            <div
                style={{width: "50%"}}
                className="column">
              <p
                className="">2017. 07</p>
              <p
                className="">온넷에드 입사</p>
              <p
                className="">포항공과대학 식당앱, 오픈마켓 쇼핑몰, 가상화폐거래소 프로토타입 등 Spring, restAPI서버 개발</p>
            </div>
            <div
                style={{width: "20.833333333333357%"}}
                className="column">
              <p
                className="">2018.04</p>
              <p
                className="">액션래빗 입사</p>
              <ul
                  className="bulleted-list">
                <li>Tlendy App</li>
              </ul>
            </div>
          </div>
          <h3
              className="">학력</h3>
          <p
            className="">서강 대학교 컴퓨터 공학과 1998 ~ 2001 ( 4학기 중퇴)</p>
          <p
            className="">
          </p>
  </ResumeBody>;
