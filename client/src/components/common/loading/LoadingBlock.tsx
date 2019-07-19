import * as React from "react";
import Styled from "styled-components";

interface PropsType {
  className?: string;

}

export const LoadingBlock: React.FunctionComponent<PropsType> = ({className = ""}) => {
  return (
    <div className={className} >
      ...loading
    </div>
  );
};
