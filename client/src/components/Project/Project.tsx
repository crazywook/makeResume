import * as React from "react";
import Styled from "styled-components";

interface PropsType {
  className?: string;
  title: string;
}

export const Project: React.FunctionComponent<PropsType> = ({title, className = ""}) => {
  return (
    <div className={className} >
      {title}
    </div>
  );
};