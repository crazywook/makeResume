import * as React from "react";
import Styled from "styled-components";

interface PropsType {
  className?: string;

}

const StyledDiv = Styled.div``;

const ResumeBlock: React.FunctionComponent<PropsType> = ({children, className = ""}) => {
  return (
    <StyledDiv className={className} >
      {children}
    </StyledDiv>
  );
};

export default ResumeBlock;
