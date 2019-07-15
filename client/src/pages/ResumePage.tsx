import * as React from "react";
import {Contact} from "../components/resume/Contact";
import {Name} from "../components/resume/Name";
import {ResumeContainer} from "../containers/ResumeContainer";

export const ResumePage: React.SFC<{}> = () =>
  <ResumeContainer>
    {(props) => <>
      <Name name={props.name} />
      <Contact email={props.email} phone={props.phone} />
    </>}
  </ResumeContainer>;
