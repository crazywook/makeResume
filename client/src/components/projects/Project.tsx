import moment = require("moment")
import * as React from "react"
import Styled from "styled-components"

import {ProjectDto} from "../../../../common/model/projects/types"
import {FlexHeader} from "../../components/layout/FlexHeader"
import {WebLink} from "../../components/projects/WebLink"
import Block from "../common/ResumeBlock"
import {BusinessLogics} from "./BusinessLogics"

interface PropsType {
  className?: string;
  projects: ProjectDto[];
}

const StyledBlock = Styled.div`
  .projects__owns-header {
    color: #a1a1a1;
    font-weight: 0.82rem;
    font-size: 0.88rem;
  }
  .projects__owns-header {
    color: #a1a1a1;
    font-size: 0.88rem;
  }
  .projects__body {
    padding-left: 1rem;
  }
`;

export const Project: React.FunctionComponent<PropsType> = ({projects, className = ""}) =>
  <StyledBlock className={className} >
    <h3 className="">
      프로젝트
    </h3>
    {projects.map(project =>
      <div key={project.id} >
        <FlexHeader>
          <h2
            className="">{project.title}&nbsp;
          </h2>
          <div className="highlight-gray">
            <span>{moment(project.startedAt).format("Y-MM-D")}</span>
            {typeof project.finishedAt &&
              <span> ~ {moment(project.finishedAt).format("Y-MM-D")}</span>
            }
          </div>
        </FlexHeader>
        <div className="projects__body" >
          <span className="projects__owns-header">소속: </span><span className="projects__owns-title">{project.owns}</span>
          {project.description &&
            <p>
              {project.description}
            </p>
          }
          <WebLink url={project.webUrl} />
          {/* <p
            className="">ios :&nbsp;
            <span className="highlight-gray">
              <a
                href={project.iosUrl}>
                  {project.iosUrl}
              </a>
            </span>
          </p>
          <p
            className="">android :&nbsp;
            <span className="highlight-gray">
              <a
                href={project.androidUrl}>
                  {project.androidUrl}
              </a>
            </span>
          </p> */}
          <Block className="decolorization-for-print">
            <h3>구현</h3>
            <figure className="block-color-gray_background callout decolorization-and-no-pading-for-print"
                // style="white-space:pre-wrap;display:flex"
            >
              <div>
                🏛 {project.implement}
              </div>
            </figure>
          </Block>
          {project.businessLogics &&
            <BusinessLogics businessLogics={project.businessLogics}></BusinessLogics>
          }
        </div>
      </div>
    )}
  </StyledBlock>;
