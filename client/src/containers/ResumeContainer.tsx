import * as React from "react";
import {RouteComponentProps} from "react-router";
import Styled from "styled-components";

interface ResumeDto {
  name: string;
  email: string;
  phone: string;
}

interface PropsType {
  children: (props: ResumeDto) => React.ReactNode;
}

const resumeProps: ResumeDto = {
  name: "김성욱",
  email: "wook9898@hanmail.net",
  phone: "01090860572",
}

export const ResumeContainer: React.FunctionComponent<PropsType> = ({children}) => <>
  {children(resumeProps)}
</>;
