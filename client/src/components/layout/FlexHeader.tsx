import * as React from "react"
import Styled from "styled-components"

const StyledFlexHeader = Styled.div`
  margin: 0.83em 0 0.3em;
  display: flex;
  align-items: center;
  > * {
    margin: 0 !important;
  }
`;

interface PropsType {
  className?: string;

}

export const FlexHeader: React.FunctionComponent<PropsType> = ({className = "", children}) => {
  return (
    <StyledFlexHeader className={className} >
      {children}
    </StyledFlexHeader>
  );
};

FlexHeader.displayName = "FlexHeader";
