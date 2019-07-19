import * as React from "react";
import {bindActionCreators} from "redux";

import {FunctionChildrenComponent} from "../../components/common/ParentComponent";
import {connect} from "../../lib/redux/connect";
import RootState from "../../store/redux/state";
import {requestDeveloperHistory} from "./action";
import {DeveloperHistoryState} from "./types";

type PropertyProps = DeveloperHistoryState;

interface DispatchProps {
  requestDeveloperHistory();
}

interface RouterComponentProps {
  children: (props: DeveloperHistoryState) => React.ReactNode;
}

type PropsType = DispatchProps & RouterComponentProps & PropertyProps;

class DeveloperHistoryContainerComponent extends FunctionChildrenComponent<PropsType> {

  componentDidMount() {
    this.props.requestDeveloperHistory();
  }
}

const connectedContainer = connect<PropertyProps, DispatchProps, PropsType, RouterComponentProps>(
  ({developerHistoryState}: RootState) => ({
    ...developerHistoryState
  }),
  dispatch => bindActionCreators({
    requestDeveloperHistory,
  }, dispatch)
)(DeveloperHistoryContainerComponent);

export {connectedContainer as DeveloperHistoryContainer};
