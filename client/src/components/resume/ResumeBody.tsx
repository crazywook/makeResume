import * as React from "react";
import Styled from "styled-components";

interface PropsType {
  className?: string;
}

const StyledBlock = Styled.div`

  hr {
    background: transparent;
    display: block;
    width: 100%;
    height: 1px;
    visibility: visible;
    border: none;
    border-bottom: 1px solid rgba(55, 53, 47, 0.09);
  }

  p {
    margin-top: 0.3em;
    margin-bottom: 0.3em;
  }

  @media only screen {
    margin: 2em auto;
    max-width: 900px;
    color: rgb(55, 53, 47);

    line-height: 1.5;
    white-space: pre-wrap;
  }
`;

export const ResumeBody: React.FunctionComponent<PropsType> = ({children, className = ""}) => {
  return (
    <StyledBlock className={className} >
      {children}
    </StyledBlock>
  );
};