import * as React from "react";
import Styled from "styled-components";

const StyledName = Styled.p`
  .logo {
    font-size: 2rem;
  }
`;

interface PropsType {
  className?: string;
  name?: string;
}

export const Name: React.FunctionComponent<PropsType> = ({name, className = ""}) => {
  return (
    <StyledName className={className} >
      <span className="logo">🧩</span>{name || ""}
    </StyledName>
  );
};