import * as React from "react";
import Styled from "styled-components";

import Block from "../../components/common/ResumeBlock";
import {ProjectDto} from "../../containers/project/types";
import {BusinessLogics} from "./BusinessLogics";

interface PropsType {
  className?: string;
  projects: ProjectDto[];
}

const StyledBlock = Styled.div`
  
`;

export const Project: React.FunctionComponent<PropsType> = ({projects, className = ""}) => {
  return (
    <StyledBlock className={className} >
      <h3 className="">
        프로젝트
      </h3>
      {projects.map(project =>
        <div key={project.id} >
          <h2
            className="">👚{project.title} <span className="highlight-gray">2019 / 04 ~ 2019 / 07</span>
          </h2>
          <p
            className=""
          >
            {project.description}
          </p>
          <p
            className="">web :&nbsp;
            <span className="highlight-gray">
              <a
                href={project.webUrl}>
                  {project.webUrl}
              </a>
            </span>
          </p>
          <p
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
          </p>
          <Block>
            <h3>구현</h3>
            <figure className="block-color-gray_background callout"
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
      )}
    </StyledBlock>
  );
};
