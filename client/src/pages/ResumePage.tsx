import * as React from "react"

import {Contact} from "../components/applicantInfo/Contact"
import {GithubLink} from "../components/applicantInfo/GithubLink"
import {Name} from "../components/applicantInfo/Name"
import {ResumeBody} from "../components/applicantInfo/ResumeBody"
import {Spec} from "../components/applicantInfo/Spec"
import {LoadingBlock} from "../components/common/loading/LoadingBlock"
import {DeveloperHistory} from "../components/developerHistory"
import {Project} from "../components/projects/Project"
import {ApplicantInfoContainer} from "../containers/applicantInfo/ApplicantInfoContainer"
import {DeveloperHistoryContainer} from "../containers/developerHistory/DeveloperHistoryContainer"
import {ProjectContainer} from "../containers/project/ProjectContainer"

export const ResumePage: React.SFC<{}> = () =>
  <ResumeBody>
    <ApplicantInfoContainer>
      {props => props.isApplicantInfoLoading
          ? <LoadingBlock />
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
            <GithubLink
              url={props.applicantInfo.githubUrl}
            />
          </>
      }
    </ApplicantInfoContainer>
    <hr />
    <ProjectContainer >
      {props => props.isProjectLoading
        ? <LoadingBlock />
        : <Project projectHistory={props.projectHistory} />
      }
    </ProjectContainer>
    <hr/>
    <DeveloperHistoryContainer>
      {props => props.isDeveloperHistoryLoading
        ? <LoadingBlock />
        : <DeveloperHistory developerHistory={props.developerHistory} />
      }
    </DeveloperHistoryContainer>
    <hr/>
    <h3
        className="">학력</h3>
    <p
      className="">서강 대학교 컴퓨터 공학과 1998 ~ 2001 ( 4학기 중퇴)</p>
    <p
      className="">
    </p>
  </ResumeBody>
