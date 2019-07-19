import * as React from "react";
import Styled from "styled-components";

interface PropsType {
  className?: string;
  career: string;
  skillStack: string[];
}

export const Spec: React.FunctionComponent<PropsType> = props =>
  <div className={props.className} >
    <p
      className="">
      <strong>경력</strong> : <span className="highlight-orange">{props.career}</span>
    </p>
    <p
      className="">
      <strong>주요기술 스택 </strong>:&nbsp;
      <span className="highlight-brown">
        {props.skillStack.join(", ")}
      </span>
    </p>
  </div>;
