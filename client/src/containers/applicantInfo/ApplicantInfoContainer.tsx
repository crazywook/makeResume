import * as React from "react";
import {bindActionCreators} from "redux";

import {connect} from "../../lib/redux/connect";
import RootState from "../../store/redux/state";
import {requestApplicantInfo} from "./action";
import {ApplicantInfo, ApplicantInfoState} from "./types";

type PropertyProps  = ApplicantInfoState;

interface DispatchProps {
  requestApplicantInfo();
}

interface RouterComponentProps {
  children: (props: ApplicantInfoState) => React.ReactNode;
}

type PropsType = DispatchProps & RouterComponentProps & PropertyProps;

class ApplicantInfoContainer extends React.Component<PropsType> {

  componentDidMount() {
    this.props.requestApplicantInfo();
  }

  render() {
    return this.props.children(this.props);
  }
}

const connectedApplicantInfoContainer = connect<PropertyProps, DispatchProps, PropsType, RouterComponentProps>(
  ({applicantInfoState: resumeState}: RootState) => ({
    ...resumeState
  }),
  dispatch => bindActionCreators({
    requestApplicantInfo,
  }, dispatch)
)(ApplicantInfoContainer);

export {connectedApplicantInfoContainer as ApplicantInfoContainer};
