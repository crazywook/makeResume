import * as React from "react";
import Styled from "styled-components";
import {ParentComponent} from "../components/common/ParentComponent";

interface PropertyProps {
  title: string;
}

type PropsType = PropertyProps;

export class ProjectContainer extends ParentComponent<PropsType> {
  a() {
    const a = this.props;
    const b = a.title;
    const c = this.props.children(this.props);
  }
}
