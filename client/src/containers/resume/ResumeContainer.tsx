import * as React from "react";
import {bindActionCreators} from "redux";
import {connect} from "../../lib/redux/connect";
import RootState from "../../store/redux/state";
import {loadResume} from "./action";
import {ApplicantInfo, ApplicantInfoState} from "./types";

type PropertyProps  = ApplicantInfoState;

interface DispatchProps {
  loadResume();
}

interface RouterComponentProps {
  children: (props: ApplicantInfoState) => React.ReactNode;
}

type PropsType = DispatchProps & RouterComponentProps & PropertyProps;

class ResumeContainer extends React.Component<PropsType> {

  componentDidMount() {
    this.props.loadResume();
  }

  render() {
    return this.props.children(this.props);
  }
}

const connectedResumeContainer = connect<PropertyProps, DispatchProps, PropsType, RouterComponentProps>(
  ({resumeState}: RootState) => ({
    ...resumeState
  }),
  dispatch => bindActionCreators({
    loadResume,
  }, dispatch)
)(ResumeContainer);

export {connectedResumeContainer as ResumeContainer};
