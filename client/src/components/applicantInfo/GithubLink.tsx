import * as React from "react"
import Styled from "styled-components"

const StyledGithubLink = Styled.div`
  .fab {
    padding-right: 0.5rem;
    font-size: 1.5rem;
    vertical-align: -0.2rem;
  }
`;

interface PropsType {
  className?: string;
  url: string;
}

export const GithubLink: React.FunctionComponent<PropsType> = ({url, className = ""}) =>
  <StyledGithubLink className="project-link">
    <i className="fab fa-github"></i>
    <a className="highlight-gray"
      href={url}
    >
      {url}
    </a>
  </StyledGithubLink>;
