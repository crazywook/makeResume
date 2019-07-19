import * as React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Styled from "styled-components";

import {FunctionChildrenComponent} from "../../components/common/ParentComponent";
import RootState from "../../store/redux/state";
import {requestProjects} from "./action";
import {ProjectsState} from "./reducer";

type PropertyProps = ProjectsState;

interface DispatchProps {
  requestProjects();
}

type PropsType = PropertyProps & DispatchProps;

export class ProjectContainerComponent extends FunctionChildrenComponent<PropsType> {

  componentDidMount() {
    this.props.requestProjects();
  }
}

const Container = connect<PropertyProps, DispatchProps>(
  ({projectsState}: RootState) => ({
    ...projectsState
  }),
  dispatch => bindActionCreators({
    requestProjects,
  }, dispatch)
)(ProjectContainerComponent);

export {Container as ProjectContainer};
