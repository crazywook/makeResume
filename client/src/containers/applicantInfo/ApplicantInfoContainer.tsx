import * as React from "react";
import {bindActionCreators} from "redux";

import {FunctionChildrenComponent} from "../../components/common/ParentComponent";
import {connect} from "../../lib/redux/connect";
import RootState from "../../store/redux/state";
import {requestApplicantInfo} from "./action";
import {ApplicantInfoState} from "./types";

type PropertyProps = ApplicantInfoState;

interface DispatchProps {
  requestApplicantInfo();
}

interface RouterComponentProps {
  children: (props: ApplicantInfoState) => React.ReactNode;
}

type PropsType = DispatchProps & RouterComponentProps & PropertyProps;

class ApplicantInfoContainer extends FunctionChildrenComponent<PropsType> {

  componentDidMount() {
    this.props.requestApplicantInfo();
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
