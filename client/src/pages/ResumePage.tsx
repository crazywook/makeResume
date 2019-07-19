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
    <hr />
    <ProjectContainer >
      {props => !props
        ? <div>loading...</div>
        : <Project projects={props.projects} />
      }
    </ProjectContainer>
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
