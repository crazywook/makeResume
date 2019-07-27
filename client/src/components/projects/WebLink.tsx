import * as React from "react"
import Styled from "styled-components"

const StyledWebLink = Styled.p`
  .fas {
    padding-right: 0.5rem;
    font-size: 1.5rem;
    vertical-align: -0.2rem;
  }
`;

interface PropsType {
  className?: string;
  url?: string;
}

export const WebLink: React.FunctionComponent<PropsType> = ({className = "", url}) => {
  return url
    ? <StyledWebLink className="project-link">
        <i className="fas fa-globe"></i>
        <a className="highlight-gray"
          href={url}
        >
          {url}
        </a>
      </StyledWebLink>
    : <></>;
};
